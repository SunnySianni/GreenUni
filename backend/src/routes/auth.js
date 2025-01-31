import express from "express";
import { login } from "../controllers/authController.js";  // Ensure .js extension

const router = express.Router();
router.post("/login", login);

export default router;  //  Use default export for ES module
