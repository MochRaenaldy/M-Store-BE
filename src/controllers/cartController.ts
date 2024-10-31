import { Request, Response } from "express";
import * as cartService from "../service/cartSevice";
import errorHandler from "../utils/errorHandler";

export const addCart = async (req: Request, res: Response) => {
  console.log("Masuk CartController");
  try {
    const productId = parseInt(req.params.productId);
    const cartItem = await cartService.addCart(productId);
    res.json(cartItem);
  } catch (error) {
    errorHandler(res, error as unknown as Error);
  }
};

export const getCart = async (req: Request, res: Response) => {
  console.log("cart controller");

  const posts = await cartService.getCart();
  res.json(posts);
};
