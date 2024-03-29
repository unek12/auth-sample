import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(createUser: CreateUserDto) {
    return this.prisma.user.create({ data: createUser });
  }

  findAll(page: number = 0, count: number = 10) {
    return this.prisma.user.findMany({ take: 10, skip: count * page });
  }

  findById(id) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  findByUsername(username: string) {
    return this.prisma.user.findUnique({
      where: { username },
    });
  }

  updateRefreshToken(username: string, token: string) {
    return this.prisma.user.update({
      where: { username },
      data: { refresh: token },
    });
  }
}
