import { PartialType } from '@nestjs/swagger';
import { CreateSatkerDto } from './create-satker.dto';

export class UpdateSatkerDto extends PartialType(CreateSatkerDto) {}
