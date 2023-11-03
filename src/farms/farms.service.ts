import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateFarmDto } from './dto/create-farm.dto';
import { UpdateFarmDto } from './dto/update-farm.dto';
import { PrismaService } from 'nestjs-prisma';
import { Prisma } from '@prisma/client';

@Injectable()
export class FarmsService {
  constructor(private prisma: PrismaService) {}

  async create(createFarmDto: CreateFarmDto) {
    const data = createFarmDto;
    try {
      return await this.prisma.farm.create({ data });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      }
    }
  }

  async findAll() {
    return await this.prisma.farm.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.farm.findUniqueOrThrow({ where: { id } });
  }

  async update(id: number, updateFarmDto: UpdateFarmDto) {
    const data = updateFarmDto;

    return await this.prisma.farm.update({
      where: { id },
      data,
    });
  }

  async findFarmsByUser(userId: number, search: string) {
    return await this.prisma.farm.findMany({
      where: {
        AND: [
          { user: userId ? Number(userId) : undefined },
          {
            name: {
              contains: search,
            },
          },
        ],
      },
    });
  }

  async remove(id: number) {
    const farm = await this.prisma.farm.findUnique({ where: { id } });

    if (!farm) {
      throw new NotFoundException('Fazenda não encontrada');
    }
    const updatedFarm = await this.prisma.farm.update({
      where: { id },
      data: { deletedAt: new Date() },
    });

    return updatedFarm;
  }
}
