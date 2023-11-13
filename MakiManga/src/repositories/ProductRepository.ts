import { request } from "./BaseRepository"

export const getAllProducts = async () => {
    return await request(`/products`);
}

export const getProduct = async (id) => {
    return await request(`/product/${id}`);
}

export const createProduct = async (body) => {
    return await request(`/products`, 'POST', body);
}

export const deleteProduct = async (id) => {
    return await request(`/products/${id}`, 'DELETE');
}