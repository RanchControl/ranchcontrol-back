import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateBatchDto } from './dto/create-batch.dto';
import { UpdateBatchDto } from './dto/update-batch.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class BatchsService {
  constructor(private prisma: PrismaService) {}
  async create(createBatchDto: CreateBatchDto) {
    const { enclosureId } = createBatchDto;

    const existingBatch = await this.prisma.batch.findFirst({
      where: {
        enclosureId,
      },
    });

    const existingAnimals = await this.prisma.animal.findFirst({
      where: {
        enclosureId,
      },
    });

    if (existingBatch || existingAnimals) {
      throw new HttpException(
        'Não é possível cadastrar um novo batch neste enclosure. Animal ou batch ja cadastrado nesse enclosure',
        HttpStatus.NOT_ACCEPTABLE
      );
    }

    const createdBatch = await this.prisma.batch.create({
      data: createBatchDto,
    });

    return createdBatch;
  }

  async findAll() {
    return await this.prisma.batch.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.batch.findUniqueOrThrow({
      where: {
        id,
      },
    });
  }

  async findBatchsByFarm(farmId: number) {
    return await this.prisma.batch.findMany({
      where: { enclosure: { farmId: farmId } },
    });
  }

  async update(id: number, updateBatchDto: UpdateBatchDto) {
    return await this.prisma.batch.update({
      where: { id },
      data: updateBatchDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.batch.delete({ where: { id } });
  }
}
