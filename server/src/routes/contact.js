import { Router } from "express";
import rateLimit from "express-rate-limit";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import mongoose from "mongoose";
import Message from "../models/Message.js";
import { validateContact } from "../utils/validate.js";
import { sendNotification } from "../utils/mailer.js";

const router = Router();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_FILE = path.join(__dirname, "../../data/messages.json");

// Max 5 messages per IP every 15 minutes
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: "Too many messages. Please try again later." },
});

async function saveToFile(entry) {
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  let list = [];
  try {
    list = JSON.parse(await fs.readFile(DATA_FILE, "utf8"));
  } catch {
    /* first message */
  }
  list.push({ ...entry, createdAt: new Date().toISOString() });
  await fs.writeFile(DATA_FILE, JSON.stringify(list, null, 2));
}

router.post("/", limiter, async (req, res) => {
  try {
    const { website, elapsed } = req.body || {};

    // Spam protection 1: honeypot field must be empty. Pretend success so bots don't retry.
    if (typeof website === "string" && website.length > 0) {
      return res.json({ ok: true });
    }
    // Spam protection 2: humans need more than ~3 seconds to fill the form.
    if (typeof elapsed === "number" && elapsed < 3000) {
      return res.status(400).json({ message: "Please take a moment to complete the form." });
    }

    const { errors, clean } = validateContact(req.body);
    if (Object.keys(errors).length) {
      return res.status(400).json({ message: "Please fix the highlighted fields.", errors });
    }

    const entry = { ...clean, ip: req.ip };

    if (mongoose.connection.readyState === 1) {
      await Message.create(entry);
    } else {
      await saveToFile(entry);
    }

    // Email is best-effort: a mail failure must not lose the message.
    sendNotification(clean).catch((e) => console.error("Mail error:", e.message));

    res.json({ ok: true });
  } catch (err) {
    console.error("Contact error:", err);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
});

export default router;
