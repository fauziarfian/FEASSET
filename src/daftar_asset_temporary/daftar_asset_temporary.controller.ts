import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DaftarAssetTemporaryService } from './daftar_asset_temporary.service';
import { CreateDaftarAssetTemporaryDto } from './dto/create-daftar_asset_temporary.dto';
import { UpdateDaftarAssetTemporaryDto } from './dto/update-daftar_asset_temporary.dto';
import { CreateDaftarAssetDto } from 'src/daftar_asset/dto/create-daftar_asset.dto';

@Controller('daftar-asset-temporary')
export class DaftarAssetTemporaryController {
  constructor(private readonly daftarAssetTemporaryService: DaftarAssetTemporaryService) {}

  @Post()
  async create(@Body() createDaftarAssetTemporaryDto: CreateDaftarAssetTemporaryDto) {
    return await this.daftarAssetTemporaryService.create(createDaftarAssetTemporaryDto);
  }

  @Get()
 async findAll() {
    return await this.daftarAssetTemporaryService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.daftarAssetTemporaryService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateDaftarAssetTemporaryDto: UpdateDaftarAssetTemporaryDto) {
    return await this.daftarAssetTemporaryService.update(+id, updateDaftarAssetTemporaryDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.daftarAssetTemporaryService.remove(+id);
  }
}
