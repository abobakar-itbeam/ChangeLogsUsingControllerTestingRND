import storeUpdateDocChangeLog from "../util/ChangeLogsHelperFunctions/storeUpdateDocChangeLog.js";

const changeLogHandler = (req, res, next) => {
  let originalSend = res.send;
  let responseBody;

  if(req.method=="PUT")
  res.send = function (body) {
    responseBody = body;
    //  console.log("body ",body)
    let d = JSON.parse(body);
    if (d.model) {
      console.log(Object.keys(d));
      storeUpdateDocChangeLog(
        req.originalDoc,
        d.data,
        d.model || "",
        d.fieldList || []
      );
      delete d.model;
      originalSend.call(this, JSON.stringify(d));
    } else originalSend.call(this, body);

    // console.log("originalDoc : ", req.originalDoc);
    // console.log("new Doc : ", d);
  };

if(req.method=="POST")


  //   req.on("end", () => {
  //     // if(req.method=="POST"||req.method=="PUT"||req.method=="DELETE")

  //     console.log(req.method + " " + req.url + " ");
  //     // console.log(res.send.data)
  //     let aaa = JSON.parse(responseBody);
  //     //console.log(aaa)
  //     // console.log(`Response Data: ${aaa}`);
  //   });
  next();
};

export default changeLogHandler;
