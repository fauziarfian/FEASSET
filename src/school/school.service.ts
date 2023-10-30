import { Injectable } from '@nestjs/common';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SchoolService {

  constructor(private prisma: PrismaService){}
 async create(createSchoolDto: CreateSchoolDto) {
    const createSchool = await this.prisma.schools.create({
      data: createSchoolDto,
    });
    if (createSchool) {
      return {
        statusCode: 200,
        data: createSchool,
      };
    }
  }

  async findAll() {
    const dataSchool = await this.prisma.schools.findMany();
    return {
      statusCode: 200,
      data: dataSchool,
    };

  }

  async findOne(id: number) {
    const dataSchool = await this.prisma.schools.findFirst({
      where: {
        id,
      },
    });
    return {
      statusCode: 200,
      data: dataSchool,
    };
  }

 async  update(id: number, updateSchoolDto: UpdateSchoolDto) {
  const updateSchool = await this.prisma.schools.update({
    data: updateSchoolDto,
    where:{
      id: id,
    },
  });
  return {
    statusCode: 200,
    data: updateSchool,
  }
}

  async remove(id: number) {
    const deleteSchool = await this.prisma.schools.delete({
      where:{
        id
      }
    });
    return {
      statusCode: 200,
      data: deleteSchool,
      message: ' Data berhasil dihapus',
    };
  }
}
