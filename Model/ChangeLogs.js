import mongoose from "mongoose";
const ChangeLogsSchema = mongoose.Schema({
  model_name: {
    type: String,
  },
  field_name: {
    type: String,
  },
  old_value: {
    type: Mixed,
  },
  new: {
    type: Mixed,
  },
  user_name: {
    type: String,
  },
});

const ChangeLogs= mongoose.model('changeLogs',ChangeLogsSchema)

export default ChangeLogs;