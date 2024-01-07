import { BaseRepository } from "./BaseRepository"

export class MangaRepository extends BaseRepository {
    getAllMangas = async () => {
        return await this.request(`/mangas`);
    }
    
    getManga = async (id: string) => {
        return await this.request(`/manga/${id}`);
    }
    
    createManga = async (body?: {}) => {
        return await this.request(`/manga`, 'POST', body);
    }
    
    deleteManga = async (id: number) => {
        return await this.request(`/manga/${id}`, 'DELETE');
    }
}