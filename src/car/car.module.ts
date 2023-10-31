import { Module } from '@nestjs/common';
import { CarService } from './car.service';
import { CarResolver } from './car.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
    providers: [CarService, CarResolver, PrismaService]
})
export class CarModule {}
