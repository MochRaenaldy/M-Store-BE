import db from "../lib/db";
import { IProduct } from "../types/product";

export const createProduct = async (data: IProduct) => {
  console.log(data);
  return await db.product.create({
    data: {
      name: data.name,
      price: Number(data.price),
      desc: data.desc,
      image: data.image,
      category: data.category,
    },
  });
};

export const findAll = async () => {
  return await db.product.findMany();
};

export const findProduct = async (id: number) => {
  return await db.product.findFirstOrThrow({
    where: {
      id: id,
    },
  });
};

export const findAllByCategory = async (category: string) => {
  return await db.product.findMany({
    where: {
      category,
    },
  });
}

export const searchProduct = async (name: string) => {
  return await db.product.findMany({
    where: {
      name: {
        contains: name,
      },
    },
  });
};
