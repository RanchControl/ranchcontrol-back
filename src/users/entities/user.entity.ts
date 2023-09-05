import { Role } from './roles.enum';

export class User {
  id: number;
  username: string;
  password: string;
  fullName: string;
  role: Role;
  phoneNumber: string;
}
