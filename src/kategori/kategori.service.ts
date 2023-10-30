import { Injectable } from '@nestjs/common';
import { CreateKategoriDto } from './dto/create-kategori.dto';
import { UpdateKategoriDto } from './dto/update-kategori.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class KategoriService {

  constructor(private prisma: PrismaService){}

  async create(createKategoriDto: CreateKategoriDto) {
    const createKategori= await this.prisma.kategori.create({
      data: createKategoriDto
    });
    if(createKategori){
      return{
        statusCode: 200,
        data: createKategori,
      }
    }
  }

  async findAll() {
    const dataKategori = await this.prisma.kategori.findMany();
    return {
      statusCode: 200,
      data: dataKategori,
    };
  }

  async findOne(id_kategori: number) {
    const dataKategori = await this.prisma.kategori.findFirst({
      where: {
        id_kategori,
      },
    });
    return {
      statusCode: 200,
      data: dataKategori,
    };
  }

  async update(id_kategori: number, updateKategoriDto: UpdateKategoriDto) {
    const updateKategori = await this.prisma.kategori.update({
      data: updateKategoriDto,
      where:{
        id_kategori: id_kategori,
      },
    });
    return {
      statusCode: 200,
      data: updateKategori,
    }
  }

  async remove(id_kategori: number) {
    const deleteKategori = await this.prisma.kategori.delete({
      where:{
        id_kategori
      }
    });
    return {
      statusCode: 200,
      data: deleteKategori,
      message: ' Data berhasil dihapus',
    };
  }
}
