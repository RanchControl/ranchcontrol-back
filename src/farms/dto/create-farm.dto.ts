import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateFarmDto {
  @IsNotEmpty()
  @IsNumber()
  userId: number;
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsString()
  CNPJ: string;
  @IsNotEmpty()
  @IsString()
  address: string;
}
