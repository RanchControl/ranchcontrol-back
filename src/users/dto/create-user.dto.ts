import { IsNotEmpty, IsString, Min } from 'class-validator';
import { User } from '../entities/user.entity';

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

  @IsString()
  @IsNotEmpty()
  role: string;

  @IsNotEmpty()
  @IsString()
  phoneNumber: string;
}
