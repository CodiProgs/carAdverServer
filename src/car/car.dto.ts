import { Field, InputType, Int } from "@nestjs/graphql";
import { IsNotEmpty, IsString } from "class-validator";


@InputType()
export class createCarDto {
    @Field()
    @IsNotEmpty({message: 'Name is required'})
    @IsString({message: 'Name must be a string'})
    name: string

    @Field(() => Int)
    @IsNotEmpty({message: 'Price is required'})
    price: number

    @Field()
    @IsNotEmpty({message: 'Body type is required'})
    @IsString({message: 'Body type must be a string'})
    bodyType: string

    @Field()
    @IsNotEmpty({message: 'Fuel type is required'})
    @IsString({message: 'Fuel type must be a string'})
    fuelType: string

    @Field(() => Int)
    @IsNotEmpty({message: 'Mileage is required'})
    mileage: number

    @Field()
    @IsNotEmpty({message: 'Transmission is required'})
    @IsString({message: 'Transmission must be a string'})
    transmission: string

    @Field()
    @IsNotEmpty({message: 'Registration is required'})
    registration: string

    @Field(() => Int)
    @IsNotEmpty({message: 'Make is required'})
    brandId: number

    @Field(() => Int)
    @IsNotEmpty({message: 'Model is required'})
    modelId: number

    @Field(() => Int)
    @IsNotEmpty({message: 'User is required'})
    userId: number

    @Field()
    @IsNotEmpty({message: 'Images is required'})
    @IsString({message: 'Images must be a string'})
    images: string
}