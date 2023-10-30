import { Test, TestingModule } from '@nestjs/testing';
import { DaftarAssetTemporaryController } from './daftar_asset_temporary.controller';
import { DaftarAssetTemporaryService } from './daftar_asset_temporary.service';

describe('DaftarAssetTemporaryController', () => {
  let controller: DaftarAssetTemporaryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DaftarAssetTemporaryController],
      providers: [DaftarAssetTemporaryService],
    }).compile();

    controller = module.get<DaftarAssetTemporaryController>(DaftarAssetTemporaryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
