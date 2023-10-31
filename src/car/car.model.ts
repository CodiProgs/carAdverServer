import { Field, ObjectType } from "@nestjs/graphql";
import { Mode } from "fs";
import { Make } from "src/make/make.model";
import { Model } from "src/model/model.model";
import { User } from "src/user/user.model";


@ObjectType()
export class Car {
    
    @Field()
    id?: number;

    @Field()
    name: string;

    @Field()
    price: string;

    @Field()
    bodyType: string;

    @Field()
    fuelType: string;

    @Field()
    mileage: string;

    @Field()
    transmission: string;

    @Field()
    images: string;

    @Field()
    registration: number;

    @Field(() => Make, {nullable: true})
    brand: Make;

    @Field(() => Model, {nullable: true})
    model: Model;

    @Field(() => User, {nullable: true})
    user: User;

}