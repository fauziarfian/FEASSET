import { PartialType } from '@nestjs/swagger';
import { CreateDaftarAssetTemporaryDto } from './create-daftar_asset_temporary.dto';

export class UpdateDaftarAssetTemporaryDto extends PartialType(CreateDaftarAssetTemporaryDto) {}
