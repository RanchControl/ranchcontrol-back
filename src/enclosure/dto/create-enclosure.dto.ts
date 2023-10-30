import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateEnclosureDto {
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
