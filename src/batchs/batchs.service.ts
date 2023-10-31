import { Injectable } from '@nestjs/common';
import { CreateBatchDto } from './dto/create-batch.dto';
import { UpdateBatchDto } from './dto/update-batch.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class BatchsService {
  constructor(private prisma: PrismaService) {}
  async create(createBatchDto: CreateBatchDto) {
    const createdBatch = await this.prisma.batch.create({
      data: createBatchDto,
    });

    const { earringStartNumber, animalQuantity } = createBatchDto;

    function generateSequentialNumbers(start, end) {
      return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    }

    // Gere números sequenciais
    const sequentialNumbers = generateSequentialNumbers(
      earringStartNumber,
      earringStartNumber + animalQuantity - 1
    );

    for (const number of sequentialNumbers) {
      // realizar o cadastro de animais com os numeros gerados (lembrar de deixar o numero do animal @unique)
      console.log(number);
    }

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
