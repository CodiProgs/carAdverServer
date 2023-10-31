import { UseFilters } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GraphQLErrorFilter } from 'src/filter/custom-exception.filter';
import { CreateModelResponse } from './model.types';
import { brandsIdDto, createModelDto } from './model.dto';
import { ModelService } from './model.service';
import { Model } from './model.model';

@Resolver()
export class ModelResolver {

    constructor(
        private readonly modelService: ModelService
    ){}

    @UseFilters(GraphQLErrorFilter)
    @Mutation(() => CreateModelResponse)
    async createModel(
        @Args('createModelInput') createModelDto: createModelDto
    ) {
        return this.modelService.createModel(createModelDto)
    }

    @Query(() => [Model])
    async getModelsAll(
        
    ){
        return this.modelService.getModelsAll()
    }
}
