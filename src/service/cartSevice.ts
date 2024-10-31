import db from "../lib/db";

export const addCart = async (productId: number) => {
  // Cek apakah user sudah memiliki cart
  let cart = await db.cart.findFirst({
    where: { status: "Pending" },
  });

  // Step 2: Jika cart belum ada, buat cart baru untuk user
  if (!cart) {
    cart = await db.cart.create({
      data: {
        status: "Pending",
        // Tambahkan data lain yang diperlukan, seperti userId jika ada
      },
    });
  }

  // Step 3: Cek apakah produk sudah ada di dalam cart
  const existingCartItem = await db.cartProduct.findFirst({
    where: {
      cartId: cart.id,
      productId: productId,
    },
  });

  // Jika produk sudah ada, lempar error
  if (existingCartItem) {
    throw new Error("Product already exists in the cart");
  }

  // Step 4: Jika produk belum ada, tambahkan sebagai item baru di dalam cart
  if (!existingCartItem) {
    const cartItem = await db.cartProduct.create({
      data: {
        cartId: cart.id,
        productId: productId,
      },
    });

    return cartItem;
  }
};

export const getCart = async () => {
  console.log("cart service");

  // Step 1: Temukan cart user dengan status 'Pending'
  const cart = await db.cart.findFirst({
    where: {
      status: "Pending",
    },
    include: {
      cartItems: {
        include: {
          product: true, // Mengambil detail produk yang terkait
        },
      },
    },
  });

  // Step 3: Return cart atau lempar error jika tidak ditemukan
  if (!cart) {
    throw new Error("Cart not found");
  }

  return cart;
};
