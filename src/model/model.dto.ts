import { Field, InputType, Int } from "@nestjs/graphql";
import { IsNotEmpty, Min } from "class-validator";

@InputType()
export class createModelDto{

    @Field()
    @IsNotEmpty({message: 'Name is required'})
    name: string

    @Field(() => Int)
    @IsNotEmpty({message: 'Make is required'})
    @Min(1, {message: 'Make is required'})
    makeId: number
}

@InputType()
export class brandsIdDto{
    @Field(() => Int)
    brandsId: number
}