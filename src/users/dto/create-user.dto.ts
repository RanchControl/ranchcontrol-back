import { IsEnum, IsNotEmpty, IsString, Min } from 'class-validator';
import { User } from '../entities/user.entity';
import { Role } from '@prisma/client';

export class CreateUserDto implements User {
  id: number;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @Min(6)
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsEnum(Role)
  @IsNotEmpty()
  role: Role;

  @IsNotEmpty()
  @IsString()
  phoneNumber: string;
}
