import { UseFilters } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GraphQLErrorFilter } from 'src/filter/custom-exception.filter';
import { CreateMakeResponse } from './make.types';
import { createMakeDto } from './make.dto';
import { MakeService } from './make.service';
import { Make } from './make.model';
import { Car } from 'src/car/car.model';

@Resolver()
export class MakeResolver {

    constructor(
        private readonly makeService: MakeService
    ){}

    @UseFilters(GraphQLErrorFilter)
    @Mutation(() => CreateMakeResponse)
    async createMake(
        @Args('createMakeInput') createDto: createMakeDto
    ){
        return await this.makeService.createMake(createDto)
    }

    @Query(() => [Make])
    async getAllMakes(){
        return await this.makeService.getAllMakes()
    }

    @Query(() => [Car])
    async getAllCarByMake(
        @Args('makeId') makeId: number
    ){
        return await this.makeService.getAllCarByMake(makeId)
    }
}
