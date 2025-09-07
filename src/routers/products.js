import { Router } from "express";
import { getProductByIdController, getProductsController } from "../controllers/products.js";

const router = Router();

router.get('/products', getProductsController);
router.get('/products/:productId', getProductByIdController);

export default router;