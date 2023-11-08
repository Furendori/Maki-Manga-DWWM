import { request } from "./BaseRepository"

export const getAllUsers = async () => {
    return await request(`/users`);
}

export const getUser = async (id) => {
    return await request(`/user/${id}`);
}

export const createUser = async (body) => {
    return await request(`/users`, 'POST', body);
}

export const deleteUser = async (id) => {
    return await request(`/users/${id}`, 'DELETE');
}