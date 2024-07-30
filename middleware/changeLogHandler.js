

const changeLogHandler =(req,res,next)=>{
    let originalSend = res.send;
    let responseBody;

    res.send = function (body) {
        responseBody = body;
        originalSend.call(this, body);
    };
    req.on('end',()=>{
// if(req.method=="POST"||req.method=="PUT"||req.method=="DELETE")



        console.log(req.method+ " "+ req.url + " ")
// console.log(res.send.data)
let aaa=JSON.parse(responseBody)
console.log(aaa)
// console.log(`Response Data: ${aaa}`);
    })
    
    next();
}

export default changeLogHandler;