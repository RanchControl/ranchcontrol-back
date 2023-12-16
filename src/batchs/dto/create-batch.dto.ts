import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Batch } from '../entities/batch.entity';

export class CreateBatchDto implements Batch {
  @IsString()
  name?: string;
  @IsNumber()
  weightAverage?: number;
  @IsNumber()
  animalQuantity?: number;
  @IsNumber()
  earringStartNumber?: number;
  @IsNotEmpty()
  @IsString()
  breed: string;
  @IsNotEmpty()
  @IsNumber()
  age: number;
  @IsNotEmpty()
  @IsDateString()
  bornDate: Date;
  @IsString()
  observation?: string;
  @IsNotEmpty()
  @IsString()
  situation: string;

  @IsNumber()
  enclosure: number;

  createdAt: Date;
  updateAt: Date;
  deletedAt: Date;
}
