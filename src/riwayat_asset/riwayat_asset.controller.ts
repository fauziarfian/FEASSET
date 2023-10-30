import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RiwayatAssetService } from './riwayat_asset.service';
import { CreateRiwayatAssetDto } from './dto/create-riwayat_asset.dto';
import { UpdateRiwayatAssetDto } from './dto/update-riwayat_asset.dto';

@Controller('riwayat-asset')
export class RiwayatAssetController {
  constructor(private readonly riwayatAssetService: RiwayatAssetService) {}

  @Post()
  async create(@Body() createRiwayatAssetDto: CreateRiwayatAssetDto) {
    return await this.riwayatAssetService.create(createRiwayatAssetDto);
  }

  @Post('move')
  async moveTemporaryAssetsToPermanent() {
    await this.riwayatAssetService.moveTemporaryAssetsToPermanent();
    return { message: 'Temporary assets moved to permanent list.' };
  }

  @Get()
  async findAll() {
    return await this.riwayatAssetService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.riwayatAssetService.findOne(+id);
  }

  @Get('kode-barang/:kode_barang')
  async findKodeBarang(@Param('kode_barang') kode_barang: string) {
    return await this.riwayatAssetService.findKodeBarang(kode_barang);
  }

  @Get('category/:category')
  async findKategori(@Param('category') category: string) {
    return await this.riwayatAssetService.findKategori(category);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateRiwayatAssetDto: UpdateRiwayatAssetDto) {
    return await this.riwayatAssetService.update(+id, updateRiwayatAssetDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.riwayatAssetService.remove(+id);
  }
}
