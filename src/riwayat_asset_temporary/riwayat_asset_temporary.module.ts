import { Module } from '@nestjs/common';
import { RiwayatAssetTemporaryService } from './riwayat_asset_temporary.service';
import { RiwayatAssetTemporaryController } from './riwayat_asset_temporary.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [RiwayatAssetTemporaryController],
  providers: [RiwayatAssetTemporaryService]
})
export class RiwayatAssetTemporaryModule {}
