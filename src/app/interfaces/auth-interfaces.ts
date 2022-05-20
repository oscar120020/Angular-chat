import { contact } from "./contact-interface";

export interface login {
    email: string;
    password: string;
}

export interface register {
    name: string;
    email: string;
    password: string;
}

export interface NameResponse {
    ok: boolean;
    response: contact;
}

export interface ErrorResponse {
    ok: boolean;
    msg: string;
}

export interface UserSolicitud {
    name: string;
    userName: string;
    uid: string;
    image: string
}