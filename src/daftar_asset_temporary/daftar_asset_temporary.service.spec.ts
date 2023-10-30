import { Test, TestingModule } from '@nestjs/testing';
import { DaftarAssetTemporaryService } from './daftar_asset_temporary.service';

describe('DaftarAssetTemporaryService', () => {
  let service: DaftarAssetTemporaryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DaftarAssetTemporaryService],
    }).compile();

    service = module.get<DaftarAssetTemporaryService>(DaftarAssetTemporaryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
