import { Test, TestingModule } from '@nestjs/testing';
import { AdminPenggunaService } from './admin_pengguna.service';

describe('AdminPenggunaService', () => {
  let service: AdminPenggunaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminPenggunaService],
    }).compile();

    service = module.get<AdminPenggunaService>(AdminPenggunaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
