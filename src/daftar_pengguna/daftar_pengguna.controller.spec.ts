import { Test, TestingModule } from '@nestjs/testing';
import { DaftarPenggunaController } from './daftar_pengguna.controller';
import { DaftarPenggunaService } from './daftar_pengguna.service';

describe('DaftarPenggunaController', () => {
  let controller: DaftarPenggunaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DaftarPenggunaController],
      providers: [DaftarPenggunaService],
    }).compile();

    controller = module.get<DaftarPenggunaController>(DaftarPenggunaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
