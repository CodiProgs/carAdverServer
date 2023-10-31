import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { createCarDto } from './car.dto';

@Injectable()
export class CarService {
    constructor(private readonly prisma: PrismaService){}

    async createCar(createCarDto: createCarDto) {
        const car = await this.prisma.car.create({
            data: {
                name: createCarDto.name,
                price: createCarDto.price,
                bodyType: createCarDto.bodyType,
                fuelType: createCarDto.fuelType,
                mileage: createCarDto.mileage,
                transmission: createCarDto.transmission,
                registration: createCarDto.registration,
                brandId: createCarDto.brandId,
                modelId: createCarDto.modelId,
                userId: createCarDto.userId,
                images: createCarDto.images
            },
        })
        return {car}
    }

    async getCarById(id: number) {
        return await this.prisma.car.findUnique({
            where: {
                id: id
            },
            include:{
                user: true,
                model: true,
                brand: true
            }
        })
        
    }

    async getAllCars(){
        const cars = await this.prisma.car.findMany({
            include:{
                user: true,
                model: true,
                brand: true
            }
        })
        return cars
    }
}
