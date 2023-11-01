import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class AnimalsService {
  constructor(private prisma: PrismaService) {}

  async create(createAnimalDto: CreateAnimalDto) {
    // Verifique se o animal está sendo inserido em um recinto com lotes associados
    const enclosure = await this.prisma.enclosure.findUnique({
      where: { id: createAnimalDto.enclosureId },
      include: { batch: true },
    });

    if (enclosure && enclosure.batch) {
      throw new HttpException(
        'Não é possível adicionar o animal diretamente ao recinto com lotes associados.',
        HttpStatus.NOT_ACCEPTABLE
      );
    }

    // Verifique se ambos enclosureId e batchId estão preenchidos
    if (
      createAnimalDto.enclosureId !== undefined &&
      createAnimalDto.batchId !== undefined
    ) {
      throw new HttpException(
        'Não é possível adicionar o animal em um recinto e um lote ao mesmo tempo.',
        HttpStatus.NOT_ACCEPTABLE
      );
    }

    // Verifique se nenhum dos campos está preenchido
    if (
      createAnimalDto.enclosureId === undefined &&
      createAnimalDto.batchId === undefined
    ) {
      throw new HttpException(
        'É necessário especificar um recinto ou um lote ao criar o animal.',
        HttpStatus.NOT_ACCEPTABLE
      );
    }

    // Se não houver lotes associados ao recinto, crie o animal
    return await this.prisma.animal.create({
      data: createAnimalDto,
    });
  }

  async findAll() {
    return await this.prisma.animal.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.animal.findUniqueOrThrow({ where: { id } });
  }
  async findAnimalsByFarm(farmId: number) {
    // Passo 1: Obtenha a lista de recintos pertencentes à fazenda
    const enclosures = await this.prisma.enclosure.findMany({
      where: {
        farmId: farmId,
      },
      include: {
        animals: true,
        batch: {
          include: {
            animals: true,
          },
        },
      },
    });

    // Passo 2: Extraia a lista de animais de todos os recintos
    // const animals: Animal[] = [];
    // for (const enclosure of enclosures) {
    //   animals.push(...enclosure.animals);
    // }

    // return animals;
    return enclosures;
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
