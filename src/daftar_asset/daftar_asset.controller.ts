import { Controller,UseGuards,Request, UseInterceptors, Get, Post, Body, Patch, Param, Delete, UploadedFile, BadRequestException } from '@nestjs/common';
import { DaftarAssetService } from './daftar_asset.service';
import { CreateDaftarAssetDto } from './dto/create-daftar_asset.dto';
import { UpdateDaftarAssetDto } from './dto/update-daftar_asset.dto';
import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';


@Controller('daftar-asset')
export class DaftarAssetController {
  constructor(private readonly daftarAssetService: DaftarAssetService) {}

   @Post()
    @UseInterceptors(
        FileInterceptor('lampiran', {
           storage: diskStorage({
               destination: 'public/uploads/lampiran',
                filename: (req, file, cb) => {
                  cb(null, file.originalname);
                },
            }),
        }),
    )
    async create(@Body() body: CreateDaftarAssetDto, @UploadedFile() file: Express.Multer.File, @Request() req) {
        try {
           
            const task = await this.daftarAssetService.create({ ...body, lampiran: file ? file.originalname : null });
            return task;
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

//   @Post()
//  async create(@Body() body: CreateDaftarAssetDto) {
//      return await this.daftarAssetService.create(body);
//  }

  @Post('move')
  async moveTemporaryAssetsToPermanent() {
    await this.daftarAssetService.moveTemporaryAssetsToPermanent();
    return { message: 'Temporary assets moved to permanent list.' };
  }

  @Get()
  async findAll() {
    return await this.daftarAssetService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.daftarAssetService.findOne(+id);
  }

  @Get('status/:status_penggunaan')
  async findByStatus(@Param('status_penggunaan') status_penggunaan: string) {
    return this.daftarAssetService.findByStatus(status_penggunaan);
  }

  @Get('kategori/:kategori')
  async findByKategori(@Param('kategori') kategori: string) {
    return this.daftarAssetService.findByKategori(kategori);
  }

  @Get('kode-barang/:kode_barang')
  async findByKodeBarang(@Param('kode_barang') kode_barang: string) {
    return this.daftarAssetService.findByKodeBarang(kode_barang);
  }

  @Get('status/:status_penggunaan/category/:kategori')
async findByStatusAndCategory(
  @Param('status_penggunaan') status_penggunaan: string,
  @Param('kategori') kategori: string
) {
  return this.daftarAssetService.findByStatusAndCategory(status_penggunaan, kategori);
}

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateDaftarAssetDto: UpdateDaftarAssetDto) {
    return await this.daftarAssetService.update(+id, updateDaftarAssetDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.daftarAssetService.remove(+id);
  }
}
