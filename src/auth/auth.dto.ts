import { Field, InputType, Int } from "@nestjs/graphql";
import { IsEmail, IsEmpty, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, MinLength, ValidateIf, isEmpty } from "class-validator";


@InputType()
export class RegisterDto {
    @Field()
    @IsNotEmpty({ message: 'Name is required' })
    @IsString({ message: 'Name must be a string' })
    @MinLength(3, { message: 'Name must be at least 3 characters' })
    name: string;

    @Field()
    @IsNotEmpty({ message: 'Type is required' })
    @IsString({ message: 'Type must be a string' })
    type: string;

    @Field()
    @IsNotEmpty({ message: 'Surname is required' })
    @IsString({ message: 'Surname must be a string' })
    @MinLength(3, { message: 'Surname must be at least 3 characters' })
    surname: string;

    @Field()
    @IsNotEmpty({ message: 'Email is required' })
    @IsEmail({}, { message: 'Email is invalid' })
    email: string;

    @Field()
    @IsNotEmpty({ message: 'Password is required' })
    @IsString({ message: 'Password must be a string' })
    @MinLength(5, { message: 'Password must be at least 5 characters' })
    password: string;

    @Field()
    @IsString()
    image: string;
}

@InputType()
export class LoginDto {
    @Field()
    @IsNotEmpty({ message: 'Email is required' })
    @IsEmail({}, { message: 'Email must be a valid' })
    email: string;

    @Field()
    @IsNotEmpty({ message: 'Password is required' })
    password: string;
}

@InputType()
export class UpdateDto {

    @Field()
    @IsEmail({}, { message: 'Email must be a valid' })
    email: string;

    @Field()
    @IsString()
    image?: string;

    @Field({ nullable: true })
    @IsOptional()
    @IsString()
    location: string | null;

    @Field()
    @IsString({ message: 'Name must be a string' })
    @MinLength(3, { message: 'Name must be at least 3 characters' })
    name?: string;

    @Field()
    @IsString({ message: 'Surname must be a string' })
    @MinLength(3, { message: 'Surname must be at least 3 characters' })
    surname?: string;

    @Field({ nullable: true })
    @IsOptional()
    @IsPhoneNumber('RU', { message: 'Phone must be a valid phone number' })
    phone: string | null;
}

@InputType()
export class updatePasswordDto {

    @Field()
    @IsNotEmpty({ message: 'Email is required' })
    email: string;

    @Field()
    @IsNotEmpty({ message: 'Password is required' })
    @MinLength(5, { message: 'Password must be at least 5 characters' })
    password: string;

}

@InputType()
export class updateEmailDto {

    @Field(() => Int)
    @IsNotEmpty({ message: 'Id is required' })
    id: number;

    @Field()
    @IsNotEmpty({ message: 'Email is required' })
    @IsEmail({}, { message: 'Email must be a valid' })
    email: string;

}

@InputType()
export class updateTypeDto {

    @Field()
    @IsNotEmpty({ message: 'Email is required' })
    @IsEmail({}, { message: 'Email must be a valid' })
    email: string;

    @Field()
    @IsNotEmpty({ message: 'Type is required' })
    @IsString({ message: 'Type must be a string' })
    type: string;

}