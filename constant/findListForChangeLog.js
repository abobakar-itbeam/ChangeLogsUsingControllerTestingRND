const fieldList={
    user:["first_name", "last_name"],
} 
const findListForChangeLog=(model)=>{
    return fieldList[model]
}

export default findListForChangeLog;