import { IsString, IsNumber, IsNotEmpty, MaxLength } from 'class-validator';
import { Farm } from '../entities/farm.entity';

export class CreateFarmDto implements Farm {
  @IsNotEmpty()
  @IsNumber()
  userId: number;
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsString()
  @MaxLength(14)
  cnpj: string;
  @IsNotEmpty()
  @IsString()
  address: string;
  createdAt: Date;
  updateAt: Date;
  deletedAt: Date;
}
