import { Field, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class Make {
    @Field()
    id?: number

    @Field()
    name: string

    @Field()
    image: string
}