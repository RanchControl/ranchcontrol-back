import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';

import { UsersModule } from './users/users.module';
import { FarmsModule } from './farms/farms.module';
import { EnclosureModule } from './enclosure/enclosure.module';
import { BatchsModule } from './batchs/batchs.module';
import { AnimalsModule } from './animals/animals.module';
import {
  PrismaModule,
  providePrismaClientExceptionFilter,
} from 'nestjs-prisma';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    AuthModule,
    FarmsModule,
    EnclosureModule,
    BatchsModule,
    AnimalsModule,
  ],

  providers: [providePrismaClientExceptionFilter()],
})
export class AppModule {}
