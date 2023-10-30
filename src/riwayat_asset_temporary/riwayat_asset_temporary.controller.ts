import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RiwayatAssetTemporaryService } from './riwayat_asset_temporary.service';
import { CreateRiwayatAssetTemporaryDto } from './dto/create-riwayat_asset_temporary.dto';
import { UpdateRiwayatAssetTemporaryDto } from './dto/update-riwayat_asset_temporary.dto';

@Controller('riwayat-asset-temporary')
export class RiwayatAssetTemporaryController {
  constructor(private readonly riwayatAssetTemporaryService: RiwayatAssetTemporaryService) {}

  @Post()
  async create(@Body() createRiwayatAssetTemporaryDto: CreateRiwayatAssetTemporaryDto) {
    return await this.riwayatAssetTemporaryService.create(createRiwayatAssetTemporaryDto);
  }

  @Get()
  async findAll() {
    return await this.riwayatAssetTemporaryService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.riwayatAssetTemporaryService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateRiwayatAssetTemporaryDto: UpdateRiwayatAssetTemporaryDto) {
    return await this.riwayatAssetTemporaryService.update(+id, updateRiwayatAssetTemporaryDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.riwayatAssetTemporaryService.remove(+id);
  }
}
