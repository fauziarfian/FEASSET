import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdminPenggunaService } from './admin_pengguna.service';
import { CreateAdminPenggunaDto } from './dto/create-admin_pengguna.dto';
import { UpdateAdminPenggunaDto } from './dto/update-admin_pengguna.dto';

@Controller('admin-pengguna')
export class AdminPenggunaController {
  constructor(private readonly adminPenggunaService: AdminPenggunaService) {}

  @Post()
 async create(@Body() createAdminPenggunaDto: CreateAdminPenggunaDto) {
    return await  this.adminPenggunaService.create(createAdminPenggunaDto);
  }

  @Get()
  async findAll() {
    return await this.adminPenggunaService.findAll();
  }

  @Get(':id')
 async findOne(@Param('id') id: string) {
    return await this.adminPenggunaService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateAdminPenggunaDto: UpdateAdminPenggunaDto) {
    return await this.adminPenggunaService.update(+id, updateAdminPenggunaDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.adminPenggunaService.remove(+id);
  }
}
