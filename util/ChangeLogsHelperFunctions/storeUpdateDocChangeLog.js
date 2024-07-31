import ChangeLogs from "../../Model/ChangeLogs.js";
const storeUpdateDocChangeLog = async (
  OldObject,
  newObject,
  model,
  fieldList,
  type = ""
) => {
 try {
  let finalObject = {};
  let values = [];

  // if (type == "update") {
   

  //   let data = await ChangeLogs.create({
  //     model_name: model,
  //     user_id: "66a89ae0c432625540803841",
  //     user_name: "Rana Abobakar",
  //     value: values,
  //     operation_type: "Update",
  //     record_id: newObject._id,
  //   });
  //   await data.save();
  // }

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
    SaveChangeLogs(model,
     "66a89ae0c432625540803841",
      "Rana Abobakar",
     values,
   "Update",
       newObject._id)

    break
  }
  case 'create':{
    SaveChangeLogs(model,
      "66a89ae0c432625540803841",
       "Rana Abobakar",
      {createData:newObject},
    "Create",
        newObject._id)
console.log('create call ')

    break
  }
  case 'delete':{
console.log('delete call')
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
  let data = await ChangeLogs.create({
    model_name,
    user_id,
    user_name,
    value,
    operation_type,
    record_id,
  });
  await data.save()
  console.log(data);
 } catch (error) {
  console.log(error)
 }

}