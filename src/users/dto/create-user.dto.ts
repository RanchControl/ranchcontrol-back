import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { User } from '../entities/user.entity';
import { Role } from '@prisma/client';

export class CreateUserDto implements User {
  id: number;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
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

  createdAt: Date;
  updateAt: Date;
  deletedAt: Date;
}
