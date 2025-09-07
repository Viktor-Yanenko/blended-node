import { getAllProducts } from "../services/products.js";

export const getProductsController = async (req, res) => {
    const products = await getAllProducts();

    res.json({
        status: 200,
        message: 'Succesfully found products!',
        data: products,
    });
};