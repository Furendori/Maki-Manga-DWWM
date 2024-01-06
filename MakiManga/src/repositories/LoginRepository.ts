import type { LoginInterface } from "@/interfaces/LoginInterface";
import { BaseRepository } from "./BaseRepository";
import { InvalidCredentialsError } from "../errors/InvalidCredentialsError";
import { NotFoundError } from "@/errors/NotFoundError";

export class LoginRepository extends BaseRepository {

    login = async (body: LoginInterface) => {
        let response = await this.request(`/login`, "POST", body);
        if (response instanceof Response) {
            if (response.status == 401) {
                throw new InvalidCredentialsError();
            }
            if (response.status == 404) {
                throw new NotFoundError("Ce compte n'existe pas");
            }
        }
        return response;
    };
}