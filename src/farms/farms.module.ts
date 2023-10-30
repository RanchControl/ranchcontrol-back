import { Module } from '@nestjs/common';
import { FarmsService } from './farms.service';
import { FarmsController } from './farms.controller';
import { PrismaService } from 'nestjs-prisma';

@Module({
  controllers: [FarmsController],
  providers: [FarmsService, PrismaService],
  exports: [FarmsService],
})
export class FarmsModule {}
