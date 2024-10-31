import { Router } from "express";
import * as productController from "../controllers/controller";
import { upload } from "../middleware/fileUpload";
import { uploadCloudinary } from "../middleware/claudinary";

export const productRoute = Router();
productRoute.get("/", productController.findAll);
productRoute.get("/:id", productController.findProduct);
productRoute.post(
  "/create",
  upload.single("image"),
  uploadCloudinary,
  productController.createProduct
);
productRoute.get("/search/:name", productController.searchProduct);
productRoute.get("/category/:category", productController.findAllByCategory);


export default productRoute;
