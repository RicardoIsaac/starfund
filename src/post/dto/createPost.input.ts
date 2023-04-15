/* eslint-disable prettier/prettier */
import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty , IsDate } from 'class-validator';
@InputType()
export class CreatePostInput {

  @IsNotEmpty()
  @Field((type) => Int)
  userId: number;

  @IsNotEmpty()
  @Field()
  title: string;
  
  @IsDate()
  @Field()
  date: Date;
}
