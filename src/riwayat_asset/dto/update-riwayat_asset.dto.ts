import { PartialType } from '@nestjs/swagger';
import { CreateRiwayatAssetDto } from './create-riwayat_asset.dto';

export class UpdateRiwayatAssetDto extends PartialType(CreateRiwayatAssetDto) {}
