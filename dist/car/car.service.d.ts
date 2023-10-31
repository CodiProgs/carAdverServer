import { PrismaService } from 'src/prisma.service';
import { createCarDto } from './car.dto';
export declare class CarService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createCar(createCarDto: createCarDto): Promise<{
        car: {
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
        };
    }>;
    getCarById(id: number): Promise<{
        user: {
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
        brand: {
            id: number;
            name: string;
            image: string;
            createdAt: Date;
            updatedAt: Date;
        };
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
    }>;
    getAllCars(): Promise<({
        user: {
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
        brand: {
            id: number;
            name: string;
            image: string;
            createdAt: Date;
            updatedAt: Date;
        };
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
    })[]>;
}
