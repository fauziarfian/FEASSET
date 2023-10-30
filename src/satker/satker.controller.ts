import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SatkerService } from './satker.service';
import { CreateSatkerDto } from './dto/create-satker.dto';
import { UpdateSatkerDto } from './dto/update-satker.dto';

@Controller('satker')
export class SatkerController {
  constructor(private readonly satkerService: SatkerService) {}

  @Post()
  async create(@Body() createSatkerDto: CreateSatkerDto) {
    return await this.satkerService.create(createSatkerDto);
  }

  @Get()
  async findAll() {
    return await this.satkerService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.satkerService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateSatkerDto: UpdateSatkerDto) {
    return await this.satkerService.update(+id, updateSatkerDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.satkerService.remove(+id);
  }
}
