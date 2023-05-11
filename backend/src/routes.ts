import express from "express";
import authRoutes from "./routes/Auth";
import userRoutes from "./routes/User";

const router = express.Router();

router.get("/health-check", (_req, res) => {
  res.send("Backend OK");
});

router.use("/auth", authRoutes);
router.use("/user", userRoutes);
export default router;
