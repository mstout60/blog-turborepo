import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignInInput } from './dto/signin.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { verify } from 'argon2';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async validateLocalUser({ email, password }: SignInInput) {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) throw new UnauthorizedException('User Not Found');

    const passwordMatched = await verify(user.password as string, password);

    if (!passwordMatched)
      throw new UnauthorizedException('Invalid Credentials');

    return user;
  }
}
