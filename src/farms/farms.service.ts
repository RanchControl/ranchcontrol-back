import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFarmDto } from './dto/create-farm.dto';
import { UpdateFarmDto } from './dto/update-farm.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class FarmsService {
  constructor(private prisma: PrismaService) {}

  create(createFarmDto: CreateFarmDto) {
    const data = createFarmDto;
    return this.prisma.farm.create({ data });
  }

  findAll() {
    return this.prisma.farm.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.farm.findUniqueOrThrow({ where: { id } });
  }

  update(id: number, updateFarmDto: UpdateFarmDto) {
    const data = updateFarmDto;

    return this.prisma.farm.update({
      where: { id },
      data,
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
