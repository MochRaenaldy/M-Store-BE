import { Router } from "express";
import productRoute from "./Product";

const route = Router();

route.use("/product", productRoute);

export default route;
