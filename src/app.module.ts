import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LatihanModule } from './latihan/latihan.module';
import { TaskModule } from './task/task.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { SchoolModule } from './school/school.module';
import { AdminPenggunaModule } from './admin_pengguna/admin_pengguna.module';
import { DaftarPenggunaModule } from './daftar_pengguna/daftar_pengguna.module';
import { DaftarAssetModule } from './daftar_asset/daftar_asset.module';
import { RiwayatAssetModule } from './riwayat_asset/riwayat_asset.module';
import { SatkerModule } from './satker/satker.module';
import { DaftarAssetTemporaryModule } from './daftar_asset_temporary/daftar_asset_temporary.module';
import { RiwayatAssetTemporaryModule } from './riwayat_asset_temporary/riwayat_asset_temporary.module';
import { KategoriModule } from './kategori/kategori.module';

@Module({
  imports: [
    LatihanModule, TaskModule, PrismaModule, AuthModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    SchoolModule,
    AdminPenggunaModule,
    DaftarPenggunaModule,
    DaftarAssetModule,
    RiwayatAssetModule,
    SatkerModule,
    DaftarAssetTemporaryModule,
    RiwayatAssetTemporaryModule,
    KategoriModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
