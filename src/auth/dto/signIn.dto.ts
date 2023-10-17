import { IsNotEmpty, IsString } from 'class-validator';
import { SignIn } from '../entities/signIn.entity';

export class SignInDto implements SignIn {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
