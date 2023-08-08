import { Router } from "express";
import productRouter from "./products";

const router = Router();

router.use("/products", productRouter);

export default router;