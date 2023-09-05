import { IsEnum, IsNotEmpty, IsString, Min } from 'class-validator';
import { User } from '../entities/user.entity';
import { Role } from '../entities/roles.enum';

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

  @IsEnum(Role) // Mantenha a validação da enumeração Role
  @IsNotEmpty()
  role: Role; // Aceita a enumeração Role

  @IsNotEmpty()
  @IsString()
  phoneNumber: string;
}
