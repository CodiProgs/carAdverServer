import { Field, ObjectType } from "@nestjs/graphql"
import { User } from "./user.model"

@ObjectType()
export class getUserByIdResponse {
    @Field(() => User, {nullable: true})
    user?: User

}