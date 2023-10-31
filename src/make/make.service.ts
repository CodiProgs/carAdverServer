import { Injectable } from '@nestjs/common';
import { createMakeDto } from './make.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MakeService {

    constructor(
        private readonly prisma: PrismaService,
    ){}

    async createMake(createDto: createMakeDto) {
        const make = await this.prisma.brand.create({
            data: {
                name: createDto.name,
                image: createDto.image,
            }
        })

        return {make}
    }

    async getAllMakes() {
        

        return await this.prisma.brand.findMany()
    }

    async getAllCarByMake(makeId: number){
        return await this.prisma.car.findMany({
            where: {
                brandId: makeId
            },
            include: {
                model: true
            }
        })
    }
}
