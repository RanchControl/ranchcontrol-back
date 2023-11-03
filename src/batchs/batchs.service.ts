import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateBatchDto } from './dto/create-batch.dto';
import { UpdateBatchDto } from './dto/update-batch.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class BatchsService {
  constructor(private prisma: PrismaService) {}
  async create(createBatchDto: CreateBatchDto) {
    const { enclosure } = createBatchDto;

    const existingBatch = await this.prisma.batch.findFirst({
      where: {
        enclosure,
      },
    });

    const existingAnimals = await this.prisma.animal.findFirst({
      where: {
        enclosure,
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
      where: { enclosures: { farm: farmId } },
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
