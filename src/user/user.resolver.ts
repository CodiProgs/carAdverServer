import { BadRequestException, UseFilters } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Request, Response } from 'express';
import { LoginDto, RegisterDto, UpdateDto, updateEmailDto, updatePasswordDto, updateTypeDto } from 'src/auth/auth.dto';
import { AuthService } from 'src/auth/auth.service';
import { LoginResponse, RegisterResponse, UpdateResponse } from 'src/auth/auth.types';
import { GraphQLErrorFilter } from 'src/filter/custom-exception.filter';
import { User } from './user.model';
import { UserService } from './user.service';
import { getUserByIdResponse } from './user.types';

@Resolver()
export class UserResolver {
    constructor(
        private readonly authService: AuthService,
        private readonly userService: UserService
    ){}

    @UseFilters(GraphQLErrorFilter)
    @Mutation(() => RegisterResponse)
    async register(
        @Args('registerInput') registerDto: RegisterDto,
        @Context() context: {res: Response}
    ) {

        const { user } = await this.authService.register(
            registerDto,
            context.res
        )
        return { user }
    }
    
    @UseFilters(GraphQLErrorFilter)
    @Mutation(() => LoginResponse)
    async login(
        @Args('loginInput') loginDto: LoginDto,
        @Context() context: {res: Response}
    ){
        return await this.authService.login(loginDto, context.res)
    }

    @Mutation(() => String)
    async logout(
        @Context() context: {res: Response}
    ){
        return this.authService.logout(context.res)
    }

    @Mutation(() => String)
    async refreshToken(
        @Context() context: {req: Request, res: Response}
    ){
        try {
            return this.authService.refreshToken(context.req, context.res)
        }catch (error) {
            throw new BadRequestException(error.message)
        }
    }

    @Query(() => String)
    hello(){
        return 'Hello World'
    }

    @Query(() => getUserByIdResponse)
    async getUserById(
        @Args('id') id: number,
    ){
        return this.userService.getUserById(id)
    }

    @UseFilters(GraphQLErrorFilter)
    @Mutation(() => UpdateResponse)
    async updateUser(
        @Args('updateInput') updateDto: UpdateDto,
        @Context() context: {req: Request, res: Response},
        
    ){
        return await this.authService.UpdateUser(updateDto, context.res)
    }

    @UseFilters(GraphQLErrorFilter)
    @Mutation(() => UpdateResponse)
    async updatePassword(
        @Args('updatePasswordInput') updatePasswordDto: updatePasswordDto,
        @Context() context: {req: Request, res: Response},
    ){
        return await this.authService.UpdatePassword(updatePasswordDto, context.res)
    }

    @UseFilters(GraphQLErrorFilter)
    @Mutation(() => UpdateResponse)
    async updateEmail(
        @Args('updateEmailInput') updateEmailDto: updateEmailDto,
        @Context() context: {req: Request, res: Response},
    ){
        return await this.authService.UpdateEmail(updateEmailDto, context.res)
    }

    @UseFilters(GraphQLErrorFilter)
    @Mutation(() => UpdateResponse)
    async updateType(
        @Args('updateTypeInput') updateTypeDto: updateTypeDto,
        @Context() context: {req: Request, res: Response},
    ){
        return await this.authService.UpdateType(updateTypeDto, context.res)
    }

    @Query(() => [User])
    async getUsersByType(
        @Args('type') type: string
    ){
        return this.userService.getUserByType(type)
    }

}
