import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateEnclosureDto } from './dto/create-enclosure.dto';
import { UpdateEnclosureDto } from './dto/update-enclosure.dto';

@Injectable()
export class EnclosureService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createEnclosureDto: CreateEnclosureDto) {
    const data = createEnclosureDto;
    return await this.prisma.enclosure.create({ data });
  }

  async findAll() {
    const enclosures = await this.prisma.enclosure.findMany();
    if (!enclosures.length) throw new NotFoundException(`No enclosures found`);
    return enclosures;
  }

  async findOne(id: number) {
    const enclosure = await this.prisma.enclosure.findUniqueOrThrow({
      where: { id },
    });
    return enclosure;
  }

  async findEnclosuresByFarm(farmId: number) {
    return await this.prisma.enclosure.findMany({ where: { farmId } });
  }

  async update(id: number, updateEnclosureDto: UpdateEnclosureDto) {
    return await this.prisma.enclosure.update({
      where: { id },
      data: updateEnclosureDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.enclosure.delete({ where: { id } });
  }
}
