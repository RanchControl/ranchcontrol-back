import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';

import { UsersModule } from './users/users.module';
import { FarmsModule } from './farms/farms.module';
import { EnclosureModule } from './enclosure/enclosure.module';
import { BatchsModule } from './batchs/batchs.module';
import { AnimalsModule } from './animals/animals.module';
import { APP_FILTER, HttpAdapterHost } from '@nestjs/core';
import { PrismaClientExceptionFilter } from 'nestjs-prisma';
import { PrismaModule } from './prisma/prisma.module';

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

  providers: [
    {
      provide: APP_FILTER,
      useFactory: ({ httpAdapter }: HttpAdapterHost) => {
        return new PrismaClientExceptionFilter(httpAdapter);
      },
      inject: [HttpAdapterHost],
    },
  ],
})
export class AppModule {}
