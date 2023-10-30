import { PartialType } from '@nestjs/swagger';
import { CreateDaftarAssetDto } from './create-daftar_asset.dto';

export class UpdateDaftarAssetDto extends PartialType(CreateDaftarAssetDto) {}
