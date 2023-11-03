import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { BatchsService } from './batchs.service';
import { CreateBatchDto } from './dto/create-batch.dto';
import { UpdateBatchDto } from './dto/update-batch.dto';

@Controller('batchs')
export class BatchsController {
  constructor(private readonly batchsService: BatchsService) {}

  @Post()
  create(@Body() createBatchDto: CreateBatchDto) {
    return this.batchsService.create(createBatchDto);
  }

  @Get()
  findAll() {
    return this.batchsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.batchsService.findOne(+id);
  }

  @Get('batchs-farma/:farmId')
  findBatchesByFarm(@Param('farmId') farmId: number) {
    return this.batchsService.findBatchsByFarm(+farmId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBatchDto: UpdateBatchDto) {
    return this.batchsService.update(+id, updateBatchDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.batchsService.remove(+id);
  }
}
