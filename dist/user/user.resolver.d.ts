import { Request, Response } from 'express';
import { LoginDto, RegisterDto, UpdateDto, updateEmailDto, updatePasswordDto, updateTypeDto } from 'src/auth/auth.dto';
import { AuthService } from 'src/auth/auth.service';
import { User } from './user.model';
import { UserService } from './user.service';
export declare class UserResolver {
    private readonly authService;
    private readonly userService;
    constructor(authService: AuthService, userService: UserService);
    register(registerDto: RegisterDto, context: {
        res: Response;
    }): Promise<{
        user: User;
    }>;
    login(loginDto: LoginDto, context: {
        res: Response;
    }): Promise<{
        user: User;
    }>;
    logout(context: {
        res: Response;
    }): Promise<string>;
    refreshToken(context: {
        req: Request;
        res: Response;
    }): Promise<string>;
    hello(): string;
    getUserById(id: number): Promise<{
        user: {
            cars: ({
                model: {
                    id: number;
                    name: string;
                    createdAt: Date;
                    updatedAt: Date;
                    brandsId: number;
                };
            } & {
                id: number;
                name: string;
                price: number;
                bodyType: string;
                fuelType: string;
                mileage: number;
                transmission: string;
                registration: string;
                createdAt: Date;
                updatedAt: Date;
                brandId: number;
                userId: number;
                images: string;
                modelId: number;
            })[];
        } & {
            id: number;
            name: string;
            surname: string;
            location: string;
            image: string;
            email: string;
            phone: string;
            password: string;
            createdAt: Date;
            updatedAt: Date;
            type: string;
        };
    }>;
    updateUser(updateDto: UpdateDto, context: {
        req: Request;
        res: Response;
    }): Promise<{
        user: User;
    }>;
    updatePassword(updatePasswordDto: updatePasswordDto, context: {
        req: Request;
        res: Response;
    }): Promise<{
        user: User;
    }>;
    updateEmail(updateEmailDto: updateEmailDto, context: {
        req: Request;
        res: Response;
    }): Promise<{
        user: User;
    }>;
    updateType(updateTypeDto: updateTypeDto, context: {
        req: Request;
        res: Response;
    }): Promise<{
        user: User;
    }>;
    getUsersByType(type: string): Promise<({
        cars: {
            id: number;
            name: string;
            price: number;
            bodyType: string;
            fuelType: string;
            mileage: number;
            transmission: string;
            registration: string;
            createdAt: Date;
            updatedAt: Date;
            brandId: number;
            userId: number;
            images: string;
            modelId: number;
        }[];
    } & {
        id: number;
        name: string;
        surname: string;
        location: string;
        image: string;
        email: string;
        phone: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
        type: string;
    })[]>;
}
