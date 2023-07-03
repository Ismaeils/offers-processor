import { Test, TestingModule } from '@nestjs/testing';
import { OfferProviderController } from './offer-provider.controller';
import { OfferProviderService } from './offer-provider.service';

describe('OfferProviderController', () => {
  let controller: OfferProviderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OfferProviderController],
      providers: [OfferProviderService],
    }).compile();

    controller = module.get<OfferProviderController>(OfferProviderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
