export class InvalidCredentialsError extends Error {
    constructor(msg: string = "Identifiants incorrectes") {
        super(msg);
    }
}