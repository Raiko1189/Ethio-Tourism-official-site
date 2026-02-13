import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import router from "./route.js"
import chatRouter from "./module/chat/chat.route.js"

import { ConnectDB } from "./config/mongo.js";
import { seedAdmin } from "./module/auth/auth.service.js";

dotenv.config()
ConnectDB().then(() => {
    seedAdmin();
});

const PORT = process.env.PORT || 5000
const app = express()
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("HELLO from Backend!")
})

app.use("/api", router)
app.use("/api/chat", chatRouter)

app.listen(PORT, () => {
    console.log(`🚀 server is running on: http://localhost:${PORT}`)
})

