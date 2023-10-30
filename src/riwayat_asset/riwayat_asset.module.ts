import { Module } from '@nestjs/common';
import { RiwayatAssetService } from './riwayat_asset.service';
import { RiwayatAssetController } from './riwayat_asset.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [RiwayatAssetController],
  providers: [RiwayatAssetService]
})
export class RiwayatAssetModule {}
