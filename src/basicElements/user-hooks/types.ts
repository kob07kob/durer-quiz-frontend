export interface CurrentUser {
    categoryName: string;
    categoryUuid: string;
    email: string;
}

export interface JwtPayload {
    category: {name: string, uuid: string};
    email: string;
    exp:number;
}
