import express from "express";
import cors from "cors";
import helmet from "helmet";
import db from "./db/connection.js";
import router from "./Router/UserRouter.js";
import changeLogHandler from "./middleware/changeLogHandler.js";
const app = express();

app.use(express.json());
app.use(cors("*"));
app.use(helmet());
const port = 4444;

app.use(changeLogHandler);
// app.get('/',(request,response)=>{
//     response.send("hi")
// })
app.use(router);

app.listen(port, () => {
  console.log(`Server working on port ${port}`);
});
