import { Router } from "express";
import { authMiddleware } from "./authMiddleware.js";
import { AuthController } from "./controllers/authController.js";
import { UserManager } from "./UserManager.js";

const userManager = new UserManager();
const authController = new AuthController(userManager);

const router = Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.get("/profile", authMiddleware, authController.profile);

export default router;
