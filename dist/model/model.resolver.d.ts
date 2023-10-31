import { createModelDto } from './model.dto';
import { ModelService } from './model.service';
export declare class ModelResolver {
    private readonly modelService;
    constructor(modelService: ModelService);
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
