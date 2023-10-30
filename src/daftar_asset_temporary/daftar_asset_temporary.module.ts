import { Module } from '@nestjs/common';
import { DaftarAssetTemporaryService } from './daftar_asset_temporary.service';
import { DaftarAssetTemporaryController } from './daftar_asset_temporary.controller';
import { PrismaModule } from 'src/prisma/prisma.module';


@Module({
  imports: [PrismaModule],
  controllers: [DaftarAssetTemporaryController],
  providers: [DaftarAssetTemporaryService]
})
export class DaftarAssetTemporaryModule {}
