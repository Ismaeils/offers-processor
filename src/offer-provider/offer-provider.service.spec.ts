import { Test, TestingModule } from '@nestjs/testing';
import { OfferProviderService } from './offer-provider.service';

describe('OfferProviderService', () => {
  let service: OfferProviderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OfferProviderService],
    }).compile();

    service = module.get<OfferProviderService>(OfferProviderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
