import { Test, TestingModule } from '@nestjs/testing';
import { RiwayatAssetTemporaryController } from './riwayat_asset_temporary.controller';
import { RiwayatAssetTemporaryService } from './riwayat_asset_temporary.service';

describe('RiwayatAssetTemporaryController', () => {
  let controller: RiwayatAssetTemporaryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RiwayatAssetTemporaryController],
      providers: [RiwayatAssetTemporaryService],
    }).compile();

    controller = module.get<RiwayatAssetTemporaryController>(RiwayatAssetTemporaryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
