import { Injectable, NotFoundException } from '@nestjs/common';

import { hashPassword } from 'src/utils/bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const data = createUserDto;

    data.password = await hashPassword(createUserDto.password);
    //data.role = createUserDto.role.toString(); // Converte a enumeração Role em string

    return this.prisma.user.create({
      data,
    });
  }

  async findAll() {
    const users = await this.prisma.user.findMany();
    return users.map((user) => user);
  }

  async findOne(id: number) {
    return await this.prisma.user.findUniqueOrThrow({ where: { id } });
  }

  async findByUsername(username: string) {
    return await this.prisma.user.findUniqueOrThrow({ where: { username } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const data = updateUserDto;
    data.password = await hashPassword(updateUserDto.password);
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async softDeleteUser(id: number) {
    const user = await this.prisma.user.findUnique({ where: { id } });

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }
    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: { deletedAt: new Date() },
    });

    return updatedUser;
  }
}
