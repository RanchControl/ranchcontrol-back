import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateEnclosureDto } from './dto/create-enclosure.dto';
import { UpdateEnclosureDto } from './dto/update-enclosure.dto';

@Injectable()
export class EnclosureService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createEnclosureDto: CreateEnclosureDto) {
    const enclosure = await this.prisma.enclosure.create({ data: createEnclosureDto });
    return enclosure;
  }

  async findAll() {
    const enclosures = await this.prisma.enclosure.findMany();
    if (!enclosures.length) throw new NotFoundException(`No enclosures found`);
    return enclosures;
  }

  async findOne(id: number) {
    const enclosure = await this.findUniqueOrThrow(id);
    return enclosure;
  }

  async update(id: number, updateEnclosureDto: UpdateEnclosureDto) {
    const enclosure = await this.findUniqueOrThrow(id);
    await this.prisma.enclosure.update({ where: { id }, data: updateEnclosureDto });
    return enclosure;
  }

  async remove(id: number) {
    const enclosure = await this.findUniqueOrThrow(id);
    await this.prisma.enclosure.delete({ where: { id } });
    return enclosure;
  }

  private async findUniqueOrThrow(id: number) {
    const enclosure = await this.prisma.enclosure.findUnique({ where: { id } });
    if (!enclosure) throw new NotFoundException(`Enclosure with ID ${id} not found`);
    return enclosure;
  }
}
