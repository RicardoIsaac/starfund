import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { CreatePostInput } from './dto/createPost.input';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private postsRepository: Repository<Post>,
    private userRepository: UsersService,
  ) {}

  async findAll(): Promise<Post[]> {
    const post = await this.postsRepository.find();
    return post;
  }

  async findByID(id: number): Promise<Post> {
    return this.postsRepository.findOne({ where: { id } });
  }

  async findByUserID(userId: number): Promise<Post[]> {
    return this.postsRepository.find({ where: { userId } });
  }

  cretePost(post: CreatePostInput): Promise<Post> {
    const newPost = this.postsRepository.create(post);
    return this.postsRepository.save(newPost);
  }

  getUser(userId: number): Promise<User> {
    return this.userRepository.findOne(userId);
  }
}
