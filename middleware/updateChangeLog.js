import mongoose from 'mongoose';

const updateChangeLog = (model = 'user') => {
  return async (req, res, next) => {
    try {
     //   console.log(req.params.id)
      const data = await mongoose.model(model).findOne({_id:req.params.id});
      req.originalDoc=data
    //  console.log("before")
     // console.log(data);
     // console.log('after')
      next();
    } catch (err) {
      next(err);
    }
  };
};

export default updateChangeLog;
