import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";


@InputType()
export class createMakeDto {
    @Field()
    @IsNotEmpty({message: 'Name is required'})
    name: string

    @Field()
    @IsNotEmpty({message: 'Image is required'})
    image: string
}