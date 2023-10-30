import { PartialType } from '@nestjs/swagger';
import { CreateRiwayatAssetTemporaryDto } from './create-riwayat_asset_temporary.dto';

export class UpdateRiwayatAssetTemporaryDto extends PartialType(CreateRiwayatAssetTemporaryDto) {}
