import { Field, ObjectType } from "@nestjs/graphql";
import { Car } from "src/car/car.model";


@ObjectType()
export class User {
    @Field()
    id?: number;

    @Field()
    name: string;

    @Field()
    surname: string;

    @Field({ nullable: true })
    location?: string;

    @Field()
    email?: string;

    @Field()
    image: string;

    @Field()
    password: string;

    @Field({ nullable: true })
    phone?: string;

    @Field()
    type: string;

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;

    @Field(() => [Car], {nullable: true})
    cars?: Car[]
}