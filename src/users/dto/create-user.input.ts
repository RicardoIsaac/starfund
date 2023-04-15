import { InputType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsEmail } from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsNotEmpty()
  @Field()
  name: string;

  @IsEmail()
  @Field()
  email: string;

  @IsNotEmpty()
  @Field()
  password: string;

  @IsNotEmpty()
  @Field((type) => Int)
  Open: number;

  @IsNotEmpty()
  @Field((type) => Int)
  Close: number;
}
