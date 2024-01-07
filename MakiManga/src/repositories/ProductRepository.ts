import { BaseRepository } from "./BaseRepository"

export class ProductRepository extends BaseRepository {
    getAllProducts = async () => {
        return await this.request(`/products`);
    }
    
    getProduct = async (id: string) => {
        return await this.request(`/product/${id}`);
    }
    
    createProduct = async (body?: {}) => {
        return await this.request(`/product`, 'POST', body);
    }
    
    deleteProduct = async (id: string) => {
        return await this.request(`/product/${id}`, 'DELETE');
    }
}