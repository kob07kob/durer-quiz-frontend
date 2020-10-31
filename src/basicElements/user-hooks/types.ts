export interface CurrentUser {
    id: number;
    name: string;
    email: string;
}

export interface JwtPayload {
    id: number;
    name: string;
    email: string;

    exp: number;
}
