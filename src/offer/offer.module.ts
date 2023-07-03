import { Module } from '@nestjs/common';
import { OfferService } from './offer.service';
import { OfferController } from './offer.controller';
import { OfferProviderModule } from 'src/offer-provider/offer-provider.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Offer } from './entities/offer.entity';

@Module({
  controllers: [OfferController],
  providers: [OfferService],
  imports: [OfferProviderModule, TypeOrmModule.forFeature([Offer])],
})
export class OfferModule {}
