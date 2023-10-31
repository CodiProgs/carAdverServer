import { PrismaClient } from '@prisma/client';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaClient);
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
    getUserByType(type: string): Promise<({
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
