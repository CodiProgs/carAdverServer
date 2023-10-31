import { createModelDto } from './model.dto';
import { PrismaService } from 'src/prisma.service';
export declare class ModelService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createModel(createModelDto: createModelDto): Promise<{
        model: {
            brand: {
                id: number;
                name: string;
            };
            id: number;
            name: string;
        };
    }>;
    getModelsAll(): Promise<({
        brand: {
            id: number;
            name: string;
        };
    } & {
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        brandsId: number;
    })[]>;
}
