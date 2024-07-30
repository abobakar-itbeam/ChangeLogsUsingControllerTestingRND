import mongoose from "mongoose";
const ChangeLogsSchema = mongoose.Schema(
  {
    model_name: {
      type: String,
    },
    user_name: {
      type: String,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    operation_type: {
      type: String,
      enum: ["Update", "Delete", "Create"],
    },
    value: {
      type: Array,
    },
    record_id: {
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  { timestamps: true }
);

const ChangeLogs = mongoose.model("changeLogs", ChangeLogsSchema);

export default ChangeLogs;
