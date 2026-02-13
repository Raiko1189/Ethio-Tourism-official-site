import { Router } from "express";
import uploadDataRoute from "./module/uploadData/upload.route.js"
import ragRoute from "./module/rag/rag.route.js"
import authRoute from "./module/auth/auth.route.js"
import { protect, authorize } from "./middlewares/auth.middleware.js"

const router = Router()

router.use("/auth", authRoute)
router.use("/upload", protect, authorize("admin"), uploadDataRoute)
router.use("/query", ragRoute)



export default router
