import { Injectable } from '@nestjs/common';
import { createModelDto } from './model.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ModelService {
    constructor(
        private readonly prisma: PrismaService
    ) {}

    async createModel(
        createModelDto: createModelDto
    ) {
        const model = await this.prisma.model.create({
            data: {
                name: createModelDto.name,
                brandsId: createModelDto.makeId,
            },
            select: {
                id: true,
                name: true,
                brand: {
                    select: {
                        id: true,
                        name: true,
                    }
                }
            }
        })
        return {model}
    }

    async getModelsAll() {
        return this.prisma.model.findMany({
            include: {
                brand: {
                    select: {
                        id: true,
                        name: true,
                    }
                }
            }
        })
    }
}
