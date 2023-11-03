import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Animal } from '../entities/animal.entity';

export class CreateAnimalDto implements Animal {
  id: number;
  @IsString()
  name?: string;

  @IsNumber()
  number?: number;

  @IsString()
  sex?: string;

  @IsNotEmpty()
  @IsString()
  breed: string;

  @IsDateString()
  bornDate?: Date;

  @IsNumber()
  bornWheight?: number;

  @IsNotEmpty()
  @IsDateString()
  entryDate: Date;

  @IsNumber()
  entryWheight?: number;

  @IsDateString()
  weaningDate?: Date;

  @IsDateString()
  fitnessDate?: Date;

  @IsString()
  type?: string;

  @IsNumber()
  weight?: number;

  @IsString()
  status?: string;

  @IsString()
  category?: string;

  @IsString()
  prefix?: string;

  @IsString()
  suffix?: string;

  enclosure?: number;

  batch?: number;

  createdAt: Date;
  updateAt: Date;
  deletedAt: Date;
}
