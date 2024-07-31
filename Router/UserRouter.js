import express from "express";
import {
  userCreate,
  userDelete,
  userFindAll,
  userFindOne,
  userUpdate,
} from "../Controller/UserController.js";
import updateChangeLog from "../middleware/updateChangeLog.js";
const router = express.Router();

router.get("/all", userFindAll);
router.post("/", userCreate);
router.get("/:id", userFindOne);
router.put("/:id", updateChangeLog("user"), userUpdate);
router.delete("/:id",updateChangeLog("user"), userDelete);

export default router;
