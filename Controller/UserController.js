import User from "../Model/User.js";

export const userCreate = async (request, response) => {
  try {
    //console.log(request.body)
    const data = await User.create(request.body);
    await data.save();
    response.json({data:data,model:'user',success:data?true:false});
  } catch (error) {
    console.log(error.message);
    response.status(500).json("message", error);
  }
};

export const userFindAll = async (request, response) => {
  try {
    console.log("find");
    const user = await User.find();
    response.send(user);
  } catch (error) {
    console.log(error.message);
    response.status(500).json("message", error.message);
  }
};

export const userFindOne = async (request, response) => {
  try {
    console.log("find by id");
    const user = await User.find({ _id: request.params.id });
    response.status(200).json({ user: user, model: "user" });
  } catch (error) {
    console.log(error.message);
    response.status(500).json("message", error.message);
  }
};
export const userUpdate = async (request, response) => {
  try {
    // console.log(request.params.id)
    // console.log('update',request.body)
    const user = await User.findByIdAndUpdate(
      { _id: request.params.id },
      request.body,
      { new: true }
    );
    response.json({ data: user, model: "user",success:user?true:false});
  } catch (error) {
    console.log(error)
    response.status(500).json({ message: error.message });
  }
};
export const userDelete = async (request, response) => {
  try {
    const user = await User.deleteOne({_id:request.params.id});
    response.json({data:user,model:"user",success:true});
  } catch (error) {
    console.log(error.message);
    response.status(500).json("message", error.message);
  }
};
