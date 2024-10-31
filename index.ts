import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import route from "./src/routes";
import multer from "multer";

// inisialisasi dotenv
dotenv.config();

// inisialisasi express
const app = express();
const port = process.env.PORT || 3000;

const upload = multer({ dest: "uploads/" });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));
app.use("/uploads", express.static("src/uploads"));
app.use(cors());

// routes

app.get("/", (req: any, res: any) => {
  res.send("Hello World");
});

app.use(route);

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`);
});
