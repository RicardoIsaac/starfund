import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Post } from 'src/post/post.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;
  @Column()
  @Field()
  name: string;
  @Column()
  @Field()
  email: string;
  @Column()
  @Field()
  password: string;
  @Column()
  @Field((type) => Int)
  Open: number;
  @Column()
  @Field((type) => Int)
  Close: number;

  @ManyToMany(() => Post, (post) => post.users)
  @Field(() => [Post], { nullable: true })
  posts: Post[];
}
