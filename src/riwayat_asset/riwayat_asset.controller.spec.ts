import { Test, TestingModule } from '@nestjs/testing';
import { RiwayatAssetController } from './riwayat_asset.controller';
import { RiwayatAssetService } from './riwayat_asset.service';

describe('RiwayatAssetController', () => {
  let controller: RiwayatAssetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RiwayatAssetController],
      providers: [RiwayatAssetService],
    }).compile();

    controller = module.get<RiwayatAssetController>(RiwayatAssetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
