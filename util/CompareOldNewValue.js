
import ChangeLogs from "../Model/ChangeLogs.js"
const CompareOldNewValue=async(OldObject,newObject,model,fieldList)=>{

  
    
let finalObject={}
let values=[]

  fieldList?.map((item,index)=>{
    if(OldObject[item]!=newObject[item])
    {
       let value={}

    value.field=item
    value.new_value=newObject[item]
    value.old_value=OldObject[item]

        values.push(value)
    }
    
  })

let data =await ChangeLogs.create({
    model_name:model,
     user_id:'66a89ae0c432625540803841',
    user_name:'Rana Abobakar',
    value:values,
    operation_type:'Update',
    record_id:newObject._id
})
 await data.save()
  console.log(data)
}

export default CompareOldNewValue;