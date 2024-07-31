import mongoose from "mongoose";

const updateChangeLog = (model = "user") => {
  return async (req, res, next) => {
    try {
      req.model_name = model;
      if (req.method == "PUT") {
        const data = await mongoose.model(model).findOne({ _id: req.params.id });
        req.originalDoc = data;
      }
      next();
    } catch (err) {
      next(err);
    }
  };
};
export default updateChangeLog;
