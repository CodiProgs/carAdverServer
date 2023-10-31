import { Field, ObjectType } from "@nestjs/graphql"
import { Make } from "./make.model"
import { ErrorType } from "src/auth/auth.types"

@ObjectType()
export class CreateMakeResponse {
    @Field(() => Make, {nullable: true})
    make: Make

    @Field(() => ErrorType, {nullable: true})
    error?: ErrorType
}