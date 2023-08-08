import { Router } from "express";
import { create, getAll, getDetail, remove, update } from "../controllers/products";

const productRouter = Router();

productRouter.post('/', create);
productRouter.get('/', getAll);
productRouter.get('/:id', getDetail);
productRouter.delete('/:id', remove);
productRouter.put('/:id', update);

export default productRouter;