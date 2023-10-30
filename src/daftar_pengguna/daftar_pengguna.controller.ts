import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { DaftarPenggunaService } from './daftar_pengguna.service';
import { CreateDaftarPenggunaDto } from './dto/create-daftar_pengguna.dto';
import { UpdateDaftarPenggunaDto } from './dto/update-daftar_pengguna.dto';

@Controller('daftar-pengguna')
export class DaftarPenggunaController {
  constructor(private readonly daftarPenggunaService: DaftarPenggunaService) {}

  @Post()
  async create(@Body() createDaftarPenggunaDto: CreateDaftarPenggunaDto) {
    return await this.daftarPenggunaService.create(createDaftarPenggunaDto);
  }

  @Get()
  async findAll() {
    return await this.daftarPenggunaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.daftarPenggunaService.findOne(+id);
  }

  @Get('status/:aktif')
  async findByUsername(@Param('aktif') aktif: string) {
    return this.daftarPenggunaService.findByUsername(aktif);
  }

  @Get('satker/:id_satker')
  async findBySatker(@Param('id_satker') id_satker: string) {
    return this.daftarPenggunaService.findBySatker(id_satker);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateDaftarPenggunaDto: UpdateDaftarPenggunaDto) {
    return await this.daftarPenggunaService.update(+id, updateDaftarPenggunaDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.daftarPenggunaService.remove(+id);
  }

  @Get(':id/status/:status/tgl/:tgl')
  async findForTandaBukti(
    @Param('id') id: string,
    @Param('status') status: string,
    @Param('tgl') tgl: string,
    
  ) {
    return this.daftarPenggunaService.findForTandaBukti(+id, status, tgl);
  }
  

}
