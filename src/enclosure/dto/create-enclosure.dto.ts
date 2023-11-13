import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Enclosure } from '../entities/enclosure.entity';

export class CreateEnclosureDto implements Enclosure {
  id: number;
  @IsNumber()
  @IsNotEmpty()
  farm: number;
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsString()
  type: string;
  createdAt: Date;
  updateAt: Date;
  deletedAt: Date;
}
