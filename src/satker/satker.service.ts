import { Injectable } from '@nestjs/common';
import { CreateSatkerDto } from './dto/create-satker.dto';
import { UpdateSatkerDto } from './dto/update-satker.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SatkerService {

  constructor(private prisma: PrismaService){}

  async create(createSatkerDto: CreateSatkerDto) {
    const createSatker= await this.prisma.satker.create({
      data: createSatkerDto
    });
    if(createSatker){
      return{
        statusCode: 200,
        data: createSatker,
      }
    }
  }

  async findAll() {
    const dataSatker = await this.prisma.satker.findMany();
    return {
      statusCode: 200,
      data: dataSatker,
    };
  }

  async findOne(id_satker: number) {
    const dataSatker = await this.prisma.satker.findFirst({
      where: {
        id_satker,
      },
    });
    return {
      statusCode: 200,
      data: dataSatker,
    };
  }

  async update(id_satker: number, updateSatkerDto: UpdateSatkerDto) {
    const updateSatker = await this.prisma.satker.update({
      data: updateSatkerDto,
      where:{
        id_satker: id_satker,
      },
    });
    return {
      statusCode: 200,
      data: updateSatker,
    }
  }

  async remove(id_satker: number) {
    const deleteSatker = await this.prisma.satker.delete({
      where:{
        id_satker
      }
    });
    return {
      statusCode: 200,
      data: deleteSatker,
      message: ' Data berhasil dihapus',
    };
  }
}
