import { Role } from '@prisma/client';

export class User {
  id: number;
  username: string;
  password: string;
  fullName: string;
  role: Role;
  phoneNumber: string;
}
