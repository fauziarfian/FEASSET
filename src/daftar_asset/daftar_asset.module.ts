import { Module } from '@nestjs/common';
import { DaftarAssetService } from './daftar_asset.service';
import { DaftarAssetController } from './daftar_asset.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [DaftarAssetController],
  providers: [DaftarAssetService]
})
export class DaftarAssetModule {}
