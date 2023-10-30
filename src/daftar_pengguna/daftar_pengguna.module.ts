import { Module } from '@nestjs/common';
import { DaftarPenggunaService } from './daftar_pengguna.service';
import { DaftarPenggunaController } from './daftar_pengguna.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [DaftarPenggunaController],
  providers: [DaftarPenggunaService]
})
export class DaftarPenggunaModule {}
