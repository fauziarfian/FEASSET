import { Module } from '@nestjs/common';
import { AdminPenggunaService } from './admin_pengguna.service';
import { AdminPenggunaController } from './admin_pengguna.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [AdminPenggunaController],
  providers: [AdminPenggunaService]
})
export class AdminPenggunaModule {}
