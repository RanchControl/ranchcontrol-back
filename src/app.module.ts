import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { FarmsModule } from './farms/farms.module';
import { EnclosureModule } from './enclosure/enclosure.module';
import { BatchsModule } from './batchs/batchs.module';

@Module({
  imports: [PrismaModule, UsersModule, AuthModule, FarmsModule, EnclosureModule, BatchsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
