import { PartialType } from '@nestjs/swagger';
import { CreateAdminPenggunaDto } from './create-admin_pengguna.dto';

export class UpdateAdminPenggunaDto extends PartialType(CreateAdminPenggunaDto) {}
