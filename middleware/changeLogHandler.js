import storeUpdateDocChangeLog from "../util/ChangeLogsHelperFunctions/storeUpdateDocChangeLog.js";
import findListForChangeLog from '../constant/findListForChangeLog.js'
const changeLogHandler = (req, res, next) => {
  try {
    let originalSend = res.send;
  let responseBody;
  if (req.method == "PUT"||req.method=="PATCH"||req.method=="POST"||req.method=="DELETE")
  {
    let type= req.method=="PUT"||req.method=="PATCH"?"update":req.method=="POST"?"create":"delete"
    console.log("type : ",type)
    
    res.send = function (body) {
      responseBody = body;
      //  console.log("body ",body)
      let d = JSON.parse(body);
      if (d.model && d.success ) {
        // console.log(Object.keys(d));
        storeUpdateDocChangeLog(
          req.originalDoc||"",
          d.data,
          d.model ||"",
          findListForChangeLog(d.model) || [],
          type
        );
        delete d.model;
        originalSend.call(this, JSON.stringify(d));
      } else originalSend.call(this, body);
    };
  }
  next();
  } catch (error) {
    console.log(error.message)
    next(error)
  }
};

export default changeLogHandler;
