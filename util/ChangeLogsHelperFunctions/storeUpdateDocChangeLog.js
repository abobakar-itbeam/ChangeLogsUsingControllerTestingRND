import ChangeLogs from "../../Model/ChangeLogs.js";
const storeUpdateDocChangeLog = async (
  OldObject,
  newObject,
  model,
  fieldList,
  type = ""
) => {
 try {
  let values = [];
console.log("store change log call")

switch(type){
  case 'update':{

    fieldList?.map((item, index) => {
      if (OldObject[item] != newObject[item]) {
        let value = {};
        value.field = item;
        value.new_value = newObject[item];
        value.old_value = OldObject[item];

        values.push(value);
      }
    });
    SaveChangeLogs(model,"66a89ae0c432625540803841","Rana Abobakar",values,"Update",newObject._id)
    console.log("update call")
    break
  }
  case 'create':{
    SaveChangeLogs(model,"66a89ae0c432625540803841","Rana Abobakar",{createData:newObject},"Create",newObject._id)
    console.log('create call ')
    break
  }
  case 'delete':{
    if(newObject.deletedCount>0)
    SaveChangeLogs(model,"66a89ae0c432625540803841","Rana Abobakar",{deleteData:OldObject},"Delete",OldObject._id)
    console.log('delete call',newObject.deletedCount)
    break
  }
}
 } catch (error) {
  console.log(error)
 }
};

export default storeUpdateDocChangeLog;


const SaveChangeLogs=async(model_name,user_id,user_name,value,operation_type,record_id)=>{
 try {
  let data = await ChangeLogs.create({model_name,user_id,user_name,value,operation_type,record_id});
  await data.save()
 // console.log(data);
 } catch (error) {
  console.log(error)
 }

}