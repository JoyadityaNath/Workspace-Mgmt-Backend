import express from "express";

const router = express.Router();

router.post("/register", register);
router.get("/login", login);

export default router;
