import { Test, TestingModule } from '@nestjs/testing';
import { AdminPenggunaController } from './admin_pengguna.controller';
import { AdminPenggunaService } from './admin_pengguna.service';

describe('AdminPenggunaController', () => {
  let controller: AdminPenggunaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminPenggunaController],
      providers: [AdminPenggunaService],
    }).compile();

    controller = module.get<AdminPenggunaController>(AdminPenggunaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
