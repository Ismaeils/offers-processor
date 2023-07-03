import { Controller } from '@nestjs/common';
import { OfferProviderService } from './offer-provider.service';

@Controller('offer-provider')
export class OfferProviderController {
  constructor(private readonly offerProviderService: OfferProviderService) {}
}
