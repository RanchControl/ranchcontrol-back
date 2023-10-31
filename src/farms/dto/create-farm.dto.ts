import { IsString, IsNumber, IsNotEmpty } from 'class-validator';
import { Farm } from '../entities/farm.entity';

export class CreateFarmDto implements Farm {
  @IsNotEmpty()
  @IsNumber()
  userId: number;
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsString()
  cnpj: string;
  @IsNotEmpty()
  @IsString()
  address: string;
  createdAt: Date;
  updateAt: Date;
  deletedAt: Date;
}
