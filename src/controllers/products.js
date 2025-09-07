import createHttpError from "http-errors";
import { createProduct, getAllProducts, getProductById, updateProduct } from "../services/products.js";

export const getProductsController = async (req, res) => {
    const products = await getAllProducts();

    res.json({
        status: 200,
        message: 'Succesfully found products!',
        data: products,
    });
};

export const getProductByIdController = async (req, res) => {
    const { productId } = req.params;
    const product = await getProductById(productId);

    if (!product) {
        throw createHttpError(404, 'Product not found');
    }

    res.json({
        status: 200,
        message: `Successfully found product with id ${productId}`,
        data: product,
    });
};

export const createProductController = async (req, res) => {
    const product = await createProduct(req.body);
    res.status(201).json({
        status: 201,
        message: 'Successfully created a product!',
        data: product,
    });
};

export const patchProductController = async (req, res) => {
    const { productId } = req.params;
    const result = await updateProduct(productId, req.body);
    res.json({
        status: 200,
        message: 'Successfully patched a product!',
        data: result,
    });
};