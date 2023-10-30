import { Test, TestingModule } from '@nestjs/testing';
import { RiwayatAssetTemporaryService } from './riwayat_asset_temporary.service';

describe('RiwayatAssetTemporaryService', () => {
  let service: RiwayatAssetTemporaryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RiwayatAssetTemporaryService],
    }).compile();

    service = module.get<RiwayatAssetTemporaryService>(RiwayatAssetTemporaryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
