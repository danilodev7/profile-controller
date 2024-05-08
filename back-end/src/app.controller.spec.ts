import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

//TESTE UNITÁRIO DO CONTROLLER PRINCIPAL
describe('AppController', () => {
  let appController: AppController;

  //INICIALIZA O MODULO DE TESTE  
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    //INICIALIZA O CONTROLLER DO APP
    appController = app.get<AppController>(AppController);
  });

  //TESTE UNITÁRIO DO MÉTODO GETHELLO DO CONTROLLER PRINCIPAL
  describe('root', () => {
    it('should return "Tudo Ok!"', () => {
      expect(appController.findAll()).toBe('Tudo Ok!');
    });
  });
});
