import { Injectable } from '@nestjs/common';
import { UpdateDaftarAssetDto } from './dto/update-daftar_asset.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDaftarAssetDto } from './dto/create-daftar_asset.dto';
import { REQUEST } from '@nestjs/core';
import { Inject } from '@nestjs/common';


@Injectable()
export class DaftarAssetService {

  constructor(private prisma: PrismaService,  @Inject(REQUEST) private req: any,){}

  async create(createDaftarAssetDto: CreateDaftarAssetDto) {
    const createDaftarAsset= await this.prisma.daftar_asset.create({
      data: createDaftarAssetDto
    });
    if(createDaftarAssetDto){
      return{
        statusCode: 200,
        data: createDaftarAsset,
      }
    }
  }

  async findAll() {
    const dataDaftar_Asset = await this.prisma.daftar_asset.findMany({
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
      
  });
    return {
      statusCode: 200,
      data: dataDaftar_Asset,
    };
  }

  async findOne(id_asset: number) {
    const dataDaftar_Asset = await this.prisma.daftar_asset.findFirst({
      where: {
        id_asset,
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
      data: dataDaftar_Asset,
    };
  }

  async findByStatus(status_penggunaan: string) {
    return this.prisma.daftar_asset.findMany({
      where: {
        status_penggunaan,
      },
    });
  }

  async findByKategori(kategori: string) {
    return this.prisma.daftar_asset.findMany({
      where: {
        kategori,
      },
    });
  }

  async findByKodeBarang(kode_barang: string) {
    return this.prisma.daftar_asset.findMany({
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
  }
  
  async findByStatusAndCategory(status_penggunaan: string, kategori: string) {
    return this.prisma.daftar_asset.findMany({
      where: {
        status_penggunaan,
        kategori,
      },
    });
  }

  async update(id_asset: number, updateDaftarAssetDto: UpdateDaftarAssetDto) {
    const updateDaftar_Asset = await this.prisma.daftar_asset.update({
      data: updateDaftarAssetDto,
      where:{
        id_asset: id_asset,
      },
    });
    return {
      statusCode: 200,
      data: updateDaftar_Asset,
    }
  }

  async remove(id_asset: number) {
    const deleteDaftar_Asset = await this.prisma.daftar_asset.delete({
      where:{
        id_asset
      }
    });
    return {
      statusCode: 200,
      data: deleteDaftar_Asset,
      message: ' Data berhasil dihapus',
    };
  }

  //Memindahkan data table temporary ke table permanen

  async moveTemporaryAssetsToPermanent() {
    const temporaryAssets = await this.prisma.daftar_asset_temporary.findMany();
    
    for (const tempAsset of temporaryAssets) {
      await this.prisma.daftar_asset.create({
        data: {
          kode_barang: tempAsset.kode_barang,
          id_pengguna: tempAsset.id_pengguna,
          id_satker: tempAsset.id_satker,
          nama_barang: tempAsset.nama_barang,
          tanggal_pembelian: tempAsset.tanggal_pembelian,
          nomer_pembelian: tempAsset.nomer_pembelian,
          merk_tipe: tempAsset.merk_tipe,
          sn: tempAsset.sn,
          garansi: tempAsset.garansi,
          kategori: tempAsset.kategori,
          spesifikasi: tempAsset.spesifikasi,
          catatan: tempAsset.catatan,
          lampiran: tempAsset.lampiran,
          nup: tempAsset.nup,
          tgl_rekam_pertama: tempAsset.tgl_rekam_pertama,
          tgl_perolehan: tempAsset.tgl_perolehan,
          nilai_perolehan_pertama: tempAsset.nilai_perolehan_pertama,
          nilai_mutasi: tempAsset.nilai_mutasi,
          nilai_perolehan: tempAsset.nilai_perolehan,
          nilai_penyusutan: tempAsset.nilai_penyusutan,
          nilai_buku: tempAsset.nilai_buku,
          kuantitas: tempAsset.kuantitas,
          jml_foto: tempAsset.jml_foto,
          status_penggunaan: tempAsset.status_penggunaan,
          no_psp: tempAsset.no_psp,
          tgl_psp: tempAsset.tgl_psp,
        
          // ... copy other fields from temporary asset to permanent asset
        },
      });
    }
    // Optional: You can also delete the temporary assets after copying
    await this.prisma.daftar_asset_temporary.deleteMany();

  }
 


}
