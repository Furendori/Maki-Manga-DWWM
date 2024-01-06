export class NotFoundError extends Error {
    constructor(msg: string = "Donnée introuvable") {
        super(msg);
    }
}