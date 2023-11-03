import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { PrismaService } from 'nestjs-prisma';
import { Prisma } from '@prisma/client';

@Injectable()
export class AnimalsService {
  constructor(private prisma: PrismaService) {}

  async create(createAnimalDto: CreateAnimalDto) {
    if (createAnimalDto.enclosure) {
      const enclosure = await this.prisma.enclosure.findUnique({
        where: { id: createAnimalDto.enclosure },
        include: { batch: true },
      });

      if (enclosure && enclosure.batch) {
        throw new HttpException(
          'Não é possível adicionar o animal diretamente ao recinto com lotes associados.',
          HttpStatus.NOT_ACCEPTABLE
        );
      }
    }
    if (
      createAnimalDto.enclosure !== undefined &&
      createAnimalDto.batch !== undefined
    ) {
      throw new HttpException(
        'Não é possível adicionar o animal em um recinto e um lote ao mesmo tempo.',
        HttpStatus.NOT_ACCEPTABLE
      );
    }

    if (
      createAnimalDto.enclosure === undefined &&
      createAnimalDto.batch === undefined
    ) {
      throw new HttpException(
        'É necessário especificar um recinto ou um lote ao criar o animal.',
        HttpStatus.NOT_ACCEPTABLE
      );
    }

    try {
      return await this.prisma.animal.create({
        data: createAnimalDto,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      }
    }
  }

  async findAll() {
    return await this.prisma.animal.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.animal.findUniqueOrThrow({ where: { id } });
  }
  async findAnimalsByFarm(farmId: number) {
    return await this.prisma.animal.findMany({
      where: {
        OR: [
          {
            enclosures: {
              farm: farmId,
            },
          },
          {
            batchs: {
              enclosures: {
                farm: farmId,
              },
            },
          },
        ],
      },
    });
  }

  async update(id: number, updateAnimalDto: UpdateAnimalDto) {
    return await this.prisma.animal.update({
      where: { id },
      data: updateAnimalDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.animal.delete({ where: { id } });
  }
}
