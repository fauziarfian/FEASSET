import { PartialType } from '@nestjs/swagger';
import { CreateDaftarPenggunaDto } from './create-daftar_pengguna.dto';

export class UpdateDaftarPenggunaDto extends PartialType(CreateDaftarPenggunaDto) {}
