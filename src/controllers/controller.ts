import { Request, Response } from "express";
import * as productService from "../service/productService";

export const createProduct = async (req: Request, res: Response) => {
  if (res.locals.image) {
    req.body.image = res.locals.image;
  }

  const data = await productService.createProduct(req.body);
  res.json(data);
};

export const findProduct = async (req: Request, res: Response) => {
  const data = await productService.findProduct(parseInt(req.params.id));
  res.json(data);
};

export const findAll = async (req: Request, res: Response) => {
  const data = await productService.findAll();
  res.json(data);
};

export const findAllByCategory = async (req: Request, res: Response) => {
  const data = await productService.findAllByCategory(req.params.category);
  res.json(data);
};

export const searchProduct = async (req: Request, res: Response) => {
  const data = await productService.searchProduct(req.params.name);
  res.json(data);
};
