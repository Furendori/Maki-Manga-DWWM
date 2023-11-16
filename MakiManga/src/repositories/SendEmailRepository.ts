import { BaseRepository } from "./BaseRepository"

export class SendEmailRepository extends BaseRepository {
    
    createUser = async (body?: {}) => {
        return await this.request(`/users`, 'POST', body);
    }
}
