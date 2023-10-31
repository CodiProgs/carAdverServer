import { Field, ObjectType } from "@nestjs/graphql"
import { ErrorType } from "src/auth/auth.types"
import { Car } from "./car.model"

@ObjectType()
export class CreateCarResponse {
    @Field(() => Car, {nullable: true})
    car: Car


    @Field(() => ErrorType, {nullable: true})
    error?: ErrorType
}