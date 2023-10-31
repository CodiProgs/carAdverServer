import { Field, ObjectType } from "@nestjs/graphql"
import { ErrorType } from "src/auth/auth.types"
import { Model } from "./model.model"

@ObjectType()
export class CreateModelResponse {
    @Field(() => Model, {nullable: true})
    model: Model


    @Field(() => ErrorType, {nullable: true})
    error?: ErrorType
}