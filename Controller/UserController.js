import User from "../Model/User.js";

export const userCreate=async(request,response)=>{
    try {
        //console.log(request.body)
        const user= await User.create(request.body)
     await   user.save()
     response.send(user)
    } catch (error) {
        console.log(error.message)
        response.stats(500).json("message",error.message)
    }
}

export const userFindAll=async(request,response)=>{
try {
    console.log("find")
    const user=await User.find()
response.send(user)
} catch (error) {
    console.log(error.message)
    response.stats(500).json("message",error.message)
}
}

export const userFindOne=async(request,response)=>{
    try {
        console.log("find by id")
        const user=await User.find(request.params.id)
    response.status(200).json({user:user,model:'user'})
    } catch (error) {
        console.log(error.message)
        response.stats(500).json("message",error.message)
    }
    }
export const userUpdate=async(request,response)=>{
    
try {
    console.log(request.params.id)
    const user = await User.findByIdAndUpdate({_id:request.params.id},request.body,{new:true})
    console.log(user)
        response.send(user)
} catch (error) {
    console.log(error.message)
    response.stats(500).json("message",error.message)
}
}
export const userDelete=async(request,response)=>{
    try {
    const user= await User.deleteOne(request.params.id)
    response.send(user)
    
} catch (error) {
    console.log(error.message)
    response.stats(500).json("message",error.message)
}
}
