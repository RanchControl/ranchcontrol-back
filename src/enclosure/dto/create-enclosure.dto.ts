import { Enclosure } from '@prisma/client';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateEnclosureDto implements Enclosure {
  id: number;
  @IsNumber()
  @IsNotEmpty()
  farmId: number;
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsString()
  type: string;
}
