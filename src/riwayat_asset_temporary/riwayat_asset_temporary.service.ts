import { Injectable } from '@nestjs/common';
import { CreateRiwayatAssetTemporaryDto } from './dto/create-riwayat_asset_temporary.dto';
import { UpdateRiwayatAssetTemporaryDto } from './dto/update-riwayat_asset_temporary.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RiwayatAssetTemporaryService {

  constructor(private prisma: PrismaService){}
  
  async create(createRiwayatAssetTemporaryDto: CreateRiwayatAssetTemporaryDto) {
    const createRiwayatAssetTemporary= await this.prisma.riwayat_asset_temporary.create({
      data: createRiwayatAssetTemporaryDto
    });
    if(createRiwayatAssetTemporary){
      return{
        statusCode: 200,
        data: createRiwayatAssetTemporary,
      }
    }
  }

  async findAll() {
    const dataRiwayat_Asset_Temporary = await this.prisma.riwayat_asset_temporary.findMany();
    return {
      statusCode: 200,
      data: dataRiwayat_Asset_Temporary,
    };
  }

  async findOne(id_riwayat_temporary: number) {
    const dataRiwayat_Asset_Temporary = await this.prisma.riwayat_asset_temporary.findFirst({
      where: {
        id_riwayat_temporary,
      },
    });
    return {
      statusCode: 200,
      data: dataRiwayat_Asset_Temporary,
    };
  }

  async update(id_riwayat_temporary: number, updateRiwayatAssetTemporaryDto: UpdateRiwayatAssetTemporaryDto) {
    const updateRiwayat_Asset_Temporary = await this.prisma.riwayat_asset_temporary.update({
      data: updateRiwayatAssetTemporaryDto,
      where:{
        id_riwayat_temporary: id_riwayat_temporary,
      },
    });
    return {
      statusCode: 200,
      data: updateRiwayat_Asset_Temporary,
    }
  }

  async remove(id_riwayat_temporary: number) {
    const deleteRiwayat_Asset_Temporary = await this.prisma.riwayat_asset_temporary.delete({
      where:{
        id_riwayat_temporary
      }
    });
    return {
      statusCode: 200,
      data: deleteRiwayat_Asset_Temporary,
      message: ' Data berhasil dihapus',
    };
  }
}
