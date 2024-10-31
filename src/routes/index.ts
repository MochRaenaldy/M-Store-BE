import { Router } from "express";
import productRoute from "./Product";
import cartRoute from "./cart";

const route = Router();

route.use("/product", productRoute);
route.use("/cart", cartRoute);

export default route;
