import { Router } from "express";
import { createProductController, deleteProductController, getProductByIdController, getProductsController, patchProductController } from "../controllers/products.js";

const router = Router();

router.get('/products', getProductsController);
router.get('/products/:productId', getProductByIdController);
router.post('/products', createProductController);
router.patch('/products/:productId', patchProductController);
router.delete('/products/:productId', deleteProductController);

export default router;