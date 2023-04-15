/* eslint-disable prettier/prettier */
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import { Column, ManyToMany ,Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Post {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  date: Date;

  @Column()
  @Field(()=> Int)
  userId: number;

  @ManyToMany(()=>User, (user)=> user.posts)
  @Field(() => User)
  users: User[];

}
