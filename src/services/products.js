import { ProductModel } from "../db/models/product.js";

export const getAllProducts = async () => {
    const products = await ProductModel.find();
    return products;
};

export const getProductById = async (productId) => {
    const product = await ProductModel.findOne({_id: productId});
    return product;
};

export const createProduct = async (payload) => {
    const product = await ProductModel.create(payload);
    return product;
};

export const updateProduct = async (productId, payload) => {
    const product = await ProductModel.findOneAndUpdate({_id: productId}, payload, {new: true});
    return product;
};