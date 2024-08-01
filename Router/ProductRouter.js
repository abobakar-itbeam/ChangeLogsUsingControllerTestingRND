import express from "express";
import {
  productCreate,
  productDelete,
  productFindAll,
  productFindOne,
  productUpdate,
} from "../Controller/ProductController.js";
import updateChangeLog from "../middleware/updateChangeLog.js";

const router = express.Router();

router.get("/all", productFindAll);
router.post("/", productCreate);
router.get("/:id", productFindOne);
router.put("/:id", updateChangeLog("product"), productUpdate);
router.delete("/:id", updateChangeLog("product"), productDelete);

export default router;
