export declare class RegisterDto {
    name: string;
    type: string;
    surname: string;
    email: string;
    password: string;
    image: string;
}
export declare class LoginDto {
    email: string;
    password: string;
}
export declare class UpdateDto {
    email: string;
    image?: string;
    location: string | null;
    name?: string;
    surname?: string;
    phone: string | null;
}
export declare class updatePasswordDto {
    email: string;
    password: string;
}
export declare class updateEmailDto {
    id: number;
    email: string;
}
export declare class updateTypeDto {
    email: string;
    type: string;
}
