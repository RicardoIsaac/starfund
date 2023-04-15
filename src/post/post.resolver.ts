import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { PostService } from './post.service';
import { Post } from './post.entity';
import { CreatePostInput } from './dto/createPost.input';
import { User } from 'src/users/entities/user.entity';

@Resolver()
export class PostResolver {
  constructor(private postService: PostService) {}

  @Query((returns) => [Post])
  posts() {
    return this.postService.findAll();
  }
  @Query((returns) => [Post])
  postByUserID(@Args('userId', { type: () => Int }) userId: number) {
    return this.postService.findByUserID(userId);
  }
  @Query((returns) => Post)
  postById(@Args('id', { type: () => Int }) id: number) {
    return this.postService.findByID(id);
  }

  @ResolveField((returns) => User)
  user(@Parent() post: Post) {
    return this.postService.getUser(post.userId);
  }

  @Mutation((returns) => Post)
  createPost(@Args('postInput') postInput: CreatePostInput) {
    return this.postService.cretePost(postInput);
  }
}
