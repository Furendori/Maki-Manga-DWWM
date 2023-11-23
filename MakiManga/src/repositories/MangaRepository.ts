import { BaseRepository } from "./BaseRepository"

export class MangaRepository extends BaseRepository {
    getAllMangas = async () => {
        return await this.request(`/mangas`);
    }
    
    getManga = async (id: string) => {
        return await this.request(`/mangas/${id}`);
    }
    
    createManga = async (body?: {}) => {
        return await this.request(`/mangas`, 'POST', body);
    }
    
    deleteManga = async (id: number) => {
        return await this.request(`/mangas/${id}`, 'DELETE');
    }
}