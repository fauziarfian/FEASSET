import { PartialType } from '@nestjs/mapped-types';
import { CreateSchoolDto } from './create-school.dto';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateSchoolDto extends PartialType(CreateSchoolDto) {

   
}
