import { Router } from "express";
import { createProductController, getProductByIdController, getProductsController, patchProductController } from "../controllers/products.js";

const router = Router();

router.get('/products', getProductsController);
router.get('/products/:productId', getProductByIdController);
router.post('/products', createProductController);
router.patch('/products/:productId', patchProductController);

export default router;