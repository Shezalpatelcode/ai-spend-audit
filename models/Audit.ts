import mongoose from "mongoose";

const AuditSchema = new mongoose.Schema(
  {
    tool: String,
    plan: String,
    spend: String,
    seats: String,
    teamSize: String,
    useCase: String,

    recommendation: String,
    savings: Number,
    summary: String,
  },
  { timestamps: true }
);

export default mongoose.models.Audit ||
  mongoose.model("Audit", AuditSchema);