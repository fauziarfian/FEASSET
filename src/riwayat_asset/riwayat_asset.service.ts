import { Injectable } from '@nestjs/common';
import { CreateRiwayatAssetDto } from './dto/create-riwayat_asset.dto';
import { UpdateRiwayatAssetDto } from './dto/update-riwayat_asset.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { REQUEST } from '@nestjs/core';
import { Inject } from '@nestjs/common';




@Injectable()
export class RiwayatAssetService {

  constructor(private prisma: PrismaService,  @Inject(REQUEST) private req: any,){}

  async create(createRiwayatAssetDto: CreateRiwayatAssetDto) {
    // Mendapatkan tanggal hari ini dalam format "dd-mm-yyyy"
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // Januari dimulai dari 0
    const yyyy = today.getFullYear();
    const formattedDate = `${dd}-${mm}-${yyyy}`;

    // Menambahkan tanggal ke DTO
    createRiwayatAssetDto.tgl = formattedDate;

    // Menyimpan data
    const createRiwayatAsset = await this.prisma.riwayat_asset.create({
      data: createRiwayatAssetDto,
    });

    if (createRiwayatAsset) {
      return {
        statusCode: 200,
        data: createRiwayatAsset,
      };
    }
  }

  async findAll() {
    const dataRiwayat_Asset = await this.prisma.riwayat_asset.findMany(
      {
        where: {
            id_pengguna: this.req.id_pengguna,
        },
        include: {
            pengguna: {
                select: {
                    id_pengguna: true,
                    nama: true,
                    id_satker: true,
                    jabatan: true
                }
            }
           
        }
        
    }
    );
    return {
      statusCode: 200,
      data: dataRiwayat_Asset,
    };
  }

  async findOne(id_riwayat: number) {
    const dataRiwayat_Asset = await this.prisma.riwayat_asset.findFirst({
      where: {
        id_riwayat,
      },
    });
    return {
      statusCode: 200,
      data: dataRiwayat_Asset,
    };
  }

  async findKodeBarang(kode_barang: string) {
    const dataRiwayat_Asset = await this.prisma.riwayat_asset.findMany({
      where: {
        kode_barang,
      },
      include: {
        pengguna: {
            select: {
                id_pengguna: true,
                nama: true,
                id_satker: true,
                jabatan: true
            }
        }
       
    }
    });
    return {
      statusCode: 200,
      data: dataRiwayat_Asset,
    };
  }

  async findKategori(category: string) {
    const dataRiwayat_Asset = await this.prisma.riwayat_asset.findMany({
      where: {
        category,
      },
      include: {
        pengguna: {
            select: {
                id_pengguna: true,
                nama: true,
                id_satker: true,
                jabatan: true
            }
        }
       
    }
    
    });
    return {
      statusCode: 200,
      data: dataRiwayat_Asset,
    };
  }

  async update(id_riwayat: number, updateRiwayatAssetDto: UpdateRiwayatAssetDto) {
    const updateRiwayat_Asset = await this.prisma.riwayat_asset.update({
      data: updateRiwayatAssetDto,
      where:{
        id_riwayat: id_riwayat,
      },
    });
    return {
      statusCode: 200,
      data: updateRiwayat_Asset,
    }
  }

  async remove(id_riwayat: number) {
    const deleteRiwayat_Asset = await this.prisma.riwayat_asset.delete({
      where:{
        id_riwayat
      }
    });
    return {
      statusCode: 200,
      data: deleteRiwayat_Asset,
      message: ' Data berhasil dihapus',
    };
  }


  //Memindahkan data table temporary ke table permanen

  async moveTemporaryAssetsToPermanent() {
    const temporaryAssets = await this.prisma.riwayat_asset_temporary.findMany();
    
    for (const tempAsset of temporaryAssets) {
      await this.prisma.riwayat_asset.create({
        data: {
          kode_barang: tempAsset.kode_barang,
          item_name: tempAsset.item_name,
          category: tempAsset.category,
          id_satker: tempAsset.id_satker,
          id_pengguna: tempAsset.id_pengguna,
          status: tempAsset.status,
          tanda_tangan: tempAsset.tanda_tangan,
          catatan: tempAsset.catatan,
          // ... copy other fields from temporary asset to permanent asset
        },
      });
    }
    // Optional: You can also delete the temporary assets after copying
    await this.prisma.riwayat_asset_temporary.deleteMany();

  }

}
