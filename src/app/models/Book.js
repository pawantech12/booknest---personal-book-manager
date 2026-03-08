import mongoose from "mongoose";
import User from "./User";

const BookSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: String,
    author: String,
    status: String,
    tags: [String],
  },
  { timestamps: true }
);

export default mongoose.models.Book || mongoose.model("Book", BookSchema);
