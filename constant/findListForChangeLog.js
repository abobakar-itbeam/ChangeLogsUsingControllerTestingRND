const fieldList={
    user:["first_name", "last_name"],
    product:['name','price'],
} 
const findListForChangeLog=(model)=>{
    return fieldList[model]
}

export default findListForChangeLog;