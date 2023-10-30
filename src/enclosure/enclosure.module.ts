import { Module } from '@nestjs/common';
import { EnclosureService } from './enclosure.service';
import { EnclosureController } from './enclosure.controller';
import { PrismaService } from 'nestjs-prisma';

@Module({
  controllers: [EnclosureController],
  providers: [EnclosureService, PrismaService],
  exports: [EnclosureService],
})
export class EnclosureModule {}
