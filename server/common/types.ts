export interface LoginRequest {
    email: string;
    password: string;
}

export interface CreateUserRequest {
    name: string;
    email: string;
    password: string;
}

export interface CreateWorldRequest {
    ownerId: string;
    name: string;
    description: string;
    genres: string[];
}
