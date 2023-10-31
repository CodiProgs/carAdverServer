import { createMakeDto } from './make.dto';
import { PrismaService } from 'src/prisma.service';
export declare class MakeService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createMake(createDto: createMakeDto): Promise<{
        make: {
            id: number;
            name: string;
            image: string;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    getAllMakes(): Promise<{
        id: number;
        name: string;
        image: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getAllCarByMake(makeId: number): Promise<({
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
