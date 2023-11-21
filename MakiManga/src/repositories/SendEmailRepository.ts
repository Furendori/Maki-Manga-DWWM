import { BaseRepository } from "./BaseRepository"

export class SendEmailRepository extends BaseRepository {
    sendEmail = async (body?: {}) => {
        return await this.request(`/send_email`, 'POST', body);
    }
}
