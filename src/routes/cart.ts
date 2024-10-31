import { Router } from "express";
import * as cartController from "../controllers/cartController";

const cartRoute = Router();
cartRoute.post("/:productId", cartController.addCart);
cartRoute.get("/", cartController.getCart);

export default cartRoute;
