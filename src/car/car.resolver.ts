import { UseFilters } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GraphQLErrorFilter } from 'src/filter/custom-exception.filter';
import { CreateCarResponse } from './car.types';
import { createCarDto } from './car.dto';
import { CarService } from './car.service';
import { Car } from './car.model';

@Resolver()
export class CarResolver {

    constructor(
        private readonly carService: CarService
    ){}

    @UseFilters(GraphQLErrorFilter)
    @Mutation(() => CreateCarResponse)
    async createCar(
        @Args('createCarInput') createCarDto: createCarDto
    ){
        return await this.carService.createCar(createCarDto)
    }

    @Query(() => Car)
    async getCarById(
        @Args('id') id: number
    ){
        return await this.carService.getCarById(id)
    }

    @Query(() => [Car])
    async getAllCars(){
        return await this.carService.getAllCars()
    }
}
