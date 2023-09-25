import { Role } from '@prisma/client';

interface LoginRequest {
  user: User;
}

interface JwtPayload {
  sub: number;
  username: string;
  role: Role;
}
