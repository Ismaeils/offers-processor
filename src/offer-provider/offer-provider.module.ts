import { Module } from '@nestjs/common';
import { OfferProviderService } from './offer-provider.service';
import { OfferProviderController } from './offer-provider.controller';

@Module({
  controllers: [OfferProviderController],
  providers: [OfferProviderService],
  exports: [OfferProviderService],
})
export class OfferProviderModule {}
