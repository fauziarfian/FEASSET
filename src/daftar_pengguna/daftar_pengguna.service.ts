import { Injectable } from '@nestjs/common';
import { CreateDaftarPenggunaDto } from './dto/create-daftar_pengguna.dto';
import { UpdateDaftarPenggunaDto } from './dto/update-daftar_pengguna.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DaftarPenggunaService {

  constructor(private prisma: PrismaService){}

 async create(createDaftarPenggunaDto: CreateDaftarPenggunaDto) {
    const createDaftarPengguna= await this.prisma.daftar_pengguna.create({
      data: createDaftarPenggunaDto
    });
    if(createDaftarPengguna){
      return{
        statusCode: 200,
        data: createDaftarPengguna,
      }
    }
  }

 async  findAll() {
    const dataDaftar_Pengguna = await this.prisma.daftar_pengguna.findMany();
    return {
      statusCode: 200,
      data: dataDaftar_Pengguna,
    };
  }

  async findOne(id_pengguna: number) {
    const dataDaftar_Pengguna = await this.prisma.daftar_pengguna.findFirst({
      where: {
        id_pengguna,
      },
      include: {
        riwayat_asset: {
          select: {
            create_at: true,
            id_pengguna: true,
            id_riwayat: true,
            kode_barang: true,
            kondisi: true,
            status: true,
            tgl: true,
          },
        },
        daftar_asset: {
          select: {
            create_at: true,
            id_pengguna: true,
            kode_barang: true,
            nama_barang: true,
            status_penggunaan: true,
          },
        },
      },
    });
  
    if (!dataDaftar_Pengguna) {
      // Tidak ada data yang ditemukan
      return {
        statusCode: 404,
        data: null,
      };
    }
  
    // Mengelompokkan daftar asset berdasarkan kode barang
    const groupedDaftarAsset = dataDaftar_Pengguna.riwayat_asset.map((riwayat) => {
      const daftarAsset = dataDaftar_Pengguna.daftar_asset.filter((asset) => asset.kode_barang === riwayat.kode_barang);
      return {
        ...riwayat,
        daftar_asset: daftarAsset,
      };
    });
  
    return {
      statusCode: 200,
      data: {
        ...dataDaftar_Pengguna,
        riwayat_asset: groupedDaftarAsset,
      },
    };
  }
  
  
  

  async findByUsername(aktif: string) {
    return this.prisma.daftar_pengguna.findMany({
      where: {
        aktif,
      },
    });
  }

  async findBySatker(id_satker: string) {
    return this.prisma.daftar_pengguna.findMany({
      where: {
        id_satker,
      },
    });
  }

  async update(id_pengguna: number, updateDaftarPenggunaDto: UpdateDaftarPenggunaDto) {
    const updateDaftar_Pengguna = await this.prisma.daftar_pengguna.update({
      data: updateDaftarPenggunaDto,
      where:{
        id_pengguna: id_pengguna,
      },
    });
    return {
      statusCode: 200,
      data: updateDaftar_Pengguna,
    }
  }

  async remove(id_pengguna: number) {
    const deleteDaftar_Pengguna = await this.prisma.daftar_pengguna.delete({
      where:{
        id_pengguna
      }
    });
    return {
      statusCode: 200,
      data: deleteDaftar_Pengguna,
      message: ' Data berhasil dihapus',
    };
  }


  async findForTandaBukti (id_pengguna: number, status:string, tgl:string) {
    const dataDaftar_Pengguna = await this.prisma.daftar_pengguna.findFirst({
      where: {
        id_pengguna,
      },
      include: {
        riwayat_asset: {
          select: {
            create_at: true,
            id_pengguna: true,
            id_riwayat: true,
            kode_barang: true,
            item_name: true,
            category: true,
            kondisi: true,
            status: true,
            tgl: true,
          },
          where: {
            status,
            tgl,
          },
        },
        daftar_asset: {
          select: {
            create_at: true,
            id_pengguna: true,
            kode_barang: true,
            nama_barang: true,
            status_penggunaan: true,
          },
        },
      },
    });
  
    if (!dataDaftar_Pengguna) {
      // Tidak ada data yang ditemukan
      return {
        statusCode: 404,
        data: null,
      };
    }
  
    // Mengelompokkan daftar asset berdasarkan kode barang
    const groupedDaftarAsset = dataDaftar_Pengguna.riwayat_asset.map((riwayat) => {
      const daftarAsset = dataDaftar_Pengguna.daftar_asset.filter((asset) => asset.kode_barang === riwayat.kode_barang);
      return {
        ...riwayat,
        daftar_asset: daftarAsset,
      };
    });
  
    return {
      statusCode: 200,
      data: {
        ...dataDaftar_Pengguna,
        riwayat_asset: groupedDaftarAsset,
      },
    };
  }
  

}
