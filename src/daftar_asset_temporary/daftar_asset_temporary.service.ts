import { Injectable } from '@nestjs/common';
import { CreateDaftarAssetTemporaryDto } from './dto/create-daftar_asset_temporary.dto';
import { UpdateDaftarAssetTemporaryDto } from './dto/update-daftar_asset_temporary.dto';
import { PrismaService } from 'src/prisma/prisma.service';



@Injectable()
export class DaftarAssetTemporaryService {

  constructor(private prisma: PrismaService){}

  async create(createDaftarAssetTemporaryDto: CreateDaftarAssetTemporaryDto) {
    const createDaftarAssetTemporary= await this.prisma.daftar_asset_temporary.create({
      data: createDaftarAssetTemporaryDto
    });
    if(createDaftarAssetTemporaryDto){
      return{
        statusCode: 200,
        data: createDaftarAssetTemporary,
      }
    }
  }

  async findAll() {
    const dataDaftar_Asset_Temporary = await this.prisma.daftar_asset_temporary.findMany();
    return {
      statusCode: 200,
      data: dataDaftar_Asset_Temporary,
    };
  }

  async findOne(id_asset_temporary: number) {
    const dataDaftar_Asset_Temporary = await this.prisma.daftar_asset_temporary.findFirst({
      where: {
        id_asset_temporary,
      },
    });
    return {
      statusCode: 200,
      data: dataDaftar_Asset_Temporary,
    };
  }

  async update(id_asset_temporary: number, updateDaftarAssetTemporaryDto: UpdateDaftarAssetTemporaryDto) {
    const updateDaftar_Asset_Temporary = await this.prisma.daftar_asset_temporary.update({
      data: updateDaftarAssetTemporaryDto,
      where:{
        id_asset_temporary: id_asset_temporary,
      },
    });
    return {
      statusCode: 200,
      data: updateDaftar_Asset_Temporary,
    }
  }

  async remove(id_asset_temporary: number) {
    const deleteDaftar_Asset_Temporary = await this.prisma.daftar_asset_temporary.delete({
      where:{
        id_asset_temporary
      }
    });
    return {
      statusCode: 200,
      data: deleteDaftar_Asset_Temporary,
      message: ' Data berhasil dihapus',
    };
  }





}
