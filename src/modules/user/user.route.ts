import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello mama. I am using prisma");
});

export const UserRoutes = router;
