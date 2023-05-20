import express from "express";
import authRoutes from "./routes/Auth";
import userRoutes from "./routes/User";
import storyRoutes from "./routes/Story";
import FileControllers from "./controllers/FileControllers";

const router = express.Router();

router.get("/health-check", (_req, res) => {
  res.send("Backend OK");
});

router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/story", storyRoutes);

//File
router.get(`/file/:userId/:filename`, FileControllers.getFile);

export default router;
