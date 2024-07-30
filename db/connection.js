import mongoose from 'mongoose'



const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const db=mongoose.connect('mongodb://localhost:27017').then(()=>{
    console.log("DataBase connected")
}).catch((error)=>{
    console.log(error)
})

export default db