import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { comparePasswords } from 'src/utils/bcrypt';
import { User } from 'src/users/entities/user.entity';
import { Payload } from './types';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string) {
    const user = await this.usersService.findByUsername(username);
    const passwordCompare = await comparePasswords(pass, user.password);
    if (user && passwordCompare) {
      const { ...result } = user;
      result.password = undefined;
      return result;
    }
    return null;
  }

  async login(user: User) {
    //const payload = {
    //  sub: user.id,
    //  username: user.username,
    //   role: user.role,
    // };
    const payload: Payload = {
      sub: user.id,
      username: user.username,
      role: user.role,
    };
    const tokens = {
      access_token: this.jwtService.sign(payload),
      refresh_token: this.jwtService.sign(payload, { expiresIn: '7d' }),
    };

    return {
      token: tokens,
      user: { ...user },
    };
  }

  async refreshToken(user: User) {
    const payload: Payload = {
      sub: user.id,
      username: user.username,
      role: user.role,
    };
    const tokens = {
      access_token: this.jwtService.sign(payload),
    };

    return {
      token: tokens,
    };
  }
}
