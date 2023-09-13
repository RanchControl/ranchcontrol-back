import { Role } from '@prisma/client';

interface LoginRequest {
  user: User;
}

interface Payload {
  sub: number;
  username: string;
  role: Role;
}
