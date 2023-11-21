import { BaseRepository } from "./BaseRepository";

export class UserRepository extends BaseRepository {
  getAllUsers = async () => {
    return await this.request(`/users`);
  };

  getUser = async (id: number) => {
    return await this.request(`/user/${id}`);
  };

  createUser = async (body?: {}) => {
    return await this.request(`/users`, "POST", body);
  };

  deleteUser = async (id: number) => {
    return await this.request(`/users/${id}`, "DELETE");
  };

  updateUser = async (id: number, data: {}) => {
    return await this.request(`/users/${id}`, "PATCH", data);
  };
}
