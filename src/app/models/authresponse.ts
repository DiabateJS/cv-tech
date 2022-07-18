import { AuthData } from "./authdata";

export interface AuthResponse {
    data: Array<AuthData>;
    errors: Array<any>;
}