import { Test, TestingModule } from '@nestjs/testing';
import { DaftarAssetController } from './daftar_asset.controller';
import { DaftarAssetService } from './daftar_asset.service';

describe('DaftarAssetController', () => {
  let controller: DaftarAssetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DaftarAssetController],
      providers: [DaftarAssetService],
    }).compile();

    controller = module.get<DaftarAssetController>(DaftarAssetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
