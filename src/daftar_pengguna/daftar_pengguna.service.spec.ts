import { Test, TestingModule } from '@nestjs/testing';
import { DaftarPenggunaService } from './daftar_pengguna.service';

describe('DaftarPenggunaService', () => {
  let service: DaftarPenggunaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DaftarPenggunaService],
    }).compile();

    service = module.get<DaftarPenggunaService>(DaftarPenggunaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
