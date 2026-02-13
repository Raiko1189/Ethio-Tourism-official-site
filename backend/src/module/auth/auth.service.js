import jwt from "jsonwebtoken";
import { User } from "../../model/User.js";

export const generateToken = (user) => {
    return jwt.sign(
        { id: user._id, email: user.email, role: user.role },
        process.env.JWT_SECRET || "default_secret",
        { expiresIn: "1d" }
    );
};

export const registerUser = async (email, password, role = "user") => {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new Error("User already exists");
    }
    const user = new User({ email, password, role });
    await user.save();

    const userObj = user.toObject();
    delete userObj.password;

    return { user: userObj, token: generateToken(user) };
};

export const loginUser = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error("Invalid credentials");
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
        throw new Error("Invalid credentials");
    }



    const userObj = user.toObject();
    delete userObj.password;

    return { user: userObj, token: generateToken(user) };
};


export const seedAdmin = async () => {
    const adminEmail = "hirkowak123@gmail.com";
    const adminPassword = "123456";

    const existingAdmin = await User.findOne({ email: adminEmail });
    if (!existingAdmin) {
        console.log(`[SEED] Admin not found. Seeding...`);
        const admin = new User({
            email: adminEmail,
            password: adminPassword,
            role: "admin"
        });
        await admin.save();
        console.log("✅ Admin user seeded successfully!");
    } else if (existingAdmin.role !== "admin") {
        console.log(`[SEED] User exists but role is ${existingAdmin.role}. Updating to admin...`);
        existingAdmin.role = "admin";
        existingAdmin.password = adminPassword; // This will trigger the pre-save hash hook
        await existingAdmin.save();
        console.log("✅ Admin user updated successfully!");
    }
};



export const loginOrRegisterGoogleUser = async (email, name, picture, googleId) => {
    let user = await User.findOne({ email });

    if (user) {
        if (!user.googleId) {
            user.googleId = googleId;
            user.avatar = picture;
            await user.save();
        }
    } else {
        user = await User.create({
            email,
            googleId,
            avatar: picture,
            role: "user"
        });
    }

    const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "10h" } // Increased token expiration
    );

    return { user, token };
};
