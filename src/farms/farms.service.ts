import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFarmDto } from './dto/create-farm.dto';
import { UpdateFarmDto } from './dto/update-farm.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class FarmsService {
  constructor(private prisma: PrismaService) {}

  async create(createFarmDto: CreateFarmDto) {
    const data = createFarmDto;
    return await this.prisma.farm.create({ data });
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

  async findFarmsByUser(userId: number) {
    return await this.prisma.farm.findMany({ where: { userId } });
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
