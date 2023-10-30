import { Test, TestingModule } from '@nestjs/testing';
import { RiwayatAssetService } from './riwayat_asset.service';

describe('RiwayatAssetService', () => {
  let service: RiwayatAssetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RiwayatAssetService],
    }).compile();

    service = module.get<RiwayatAssetService>(RiwayatAssetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
