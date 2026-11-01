import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, maxlength: 200 },
    email: { type: String, required: true, maxlength: 200 },
    subject: { type: String, required: true, maxlength: 300 },
    message: { type: String, required: true, maxlength: 6000 },
    ip: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Message", messageSchema);
