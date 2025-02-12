import { Resolver, Query, Context } from '@nestjs/graphql';
import { PostService } from './post.service';
import { Post } from './entities/post.entity';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth/jwt-auth.guard';

@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  //@UseGuards(JwtAuthGuard)
  @Query(() => [Post], { name: 'posts' })
  findAll(@Context() context) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    const { user } = context.req;
    console.log('User from context: ', user);
    return this.postService.findAll();
  }
}
