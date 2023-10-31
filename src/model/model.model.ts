import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Make } from "src/make/make.model";

@ObjectType()
export class Model {
    @Field()
    id?: number;

    @Field()
    name: string;

    @Field(() => Make, {nullable: true})
    brand: Make;
}