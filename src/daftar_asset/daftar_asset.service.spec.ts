import { Test, TestingModule } from '@nestjs/testing';
import { DaftarAssetService } from './daftar_asset.service';

describe('DaftarAssetService', () => {
  let service: DaftarAssetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DaftarAssetService],
    }).compile();

    service = module.get<DaftarAssetService>(DaftarAssetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
