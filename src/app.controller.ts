import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { Roles } from './auth/roles/roles.decorator';
import { RolesGuard } from './auth/guards/roles.guard';
import { Role } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}
}
