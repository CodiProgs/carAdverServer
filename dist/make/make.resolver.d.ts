import { createMakeDto } from './make.dto';
import { MakeService } from './make.service';
export declare class MakeResolver {
    private readonly makeService;
    constructor(makeService: MakeService);
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
