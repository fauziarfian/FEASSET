import { Module } from '@nestjs/common';
import { SatkerService } from './satker.service';
import { SatkerController } from './satker.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [SatkerController],
  providers: [SatkerService]
})
export class SatkerModule {}
