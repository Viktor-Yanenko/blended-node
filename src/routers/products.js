import { Router } from "express";
import { createProductController, getProductByIdController, getProductsController } from "../controllers/products.js";

const router = Router();

router.get('/products', getProductsController);
router.get('/products/:productId', getProductByIdController);
router.post('/products', createProductController);

export default router;