import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
import contactRoutes from "./routes/contact.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.set("trust proxy", 1); // needed on Render/Railway etc. so rate limiting sees real IPs
app.use(helmet());

const origins = (process.env.CLIENT_ORIGIN || "http://localhost:5173").split(",").map((s) => s.trim());
app.use(
  cors({
    origin: (origin, cb) => (!origin || origins.includes(origin) ? cb(null, true) : cb(new Error("Not allowed by CORS"))),
    methods: ["POST", "GET"],
  })
);
app.use(express.json({ limit: "20kb" }));

app.get("/api/health", (_req, res) => res.json({ status: "ok" }));
app.use("/api/contact", contactRoutes);

app.use((_req, res) => res.status(404).json({ message: "Not found" }));
app.use((err, _req, res, _next) => {
  console.error(err.message);
  res.status(err.message === "Not allowed by CORS" ? 403 : 500).json({ message: "Request failed" });
});

async function start() {
  if (process.env.MONGODB_URI) {
    try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("MongoDB connected");
    } catch (e) {
      console.error("MongoDB connection failed, using JSON file instead:", e.message);
    }
  } else {
    console.log("No MONGODB_URI set – messages will be saved to server/data/messages.json");
  }
  app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
}

start();
