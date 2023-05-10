import express from "express";
import authRoutes from "./routes/Auth";

const router = express.Router();

router.get("/health-check", (_req, res) => {
  res.send("Backend OK");
});

router.use("/auth", authRoutes);
export default router;
