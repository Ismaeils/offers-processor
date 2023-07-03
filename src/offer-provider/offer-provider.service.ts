import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { payload1, payload2 } from './payloads';
import * as _ from 'lodash';
import { ProviderOneOfferDto } from './dtos/provider-one-offer.dto';
import { validatorDto } from './dtos/provider-validator.dto';
import { ProviderPayloadDto } from './dtos/provider-payload.dto';
import { OfferProvidersEnum } from './enums/provider.enum';
import { ProviderTwoOfferDto } from './dtos/provider-two-offer.dto';
@Injectable()
export class OfferProviderService {
  async getMoreOffers(provider: string): Promise<ProviderPayloadDto> {
    switch (provider) {
      case OfferProvidersEnum.PROVIDER_1:
        return await this.fetchProvider1LocalOffers();
      case OfferProvidersEnum.PROVIDER_2:
        return await this.fetchProvider2LocalOffers();
      default:
        Logger.log(`This provider does not exist`);
        throw new BadRequestException(`This provider does not exist`);
    }
  }
  async fetchProvider1LocalOffers(): Promise<ProviderPayloadDto> {
    // Getting root list of offers for ProviderOne
    const rawOffers = JSON.parse(JSON.stringify(payload1.response.offers));

    const offers = [];

    for (const offer of rawOffers) {
      const { hasErrors, objInstance } = await validatorDto(
        ProviderOneOfferDto,
        offer,
      );
      if (hasErrors) continue;
      offers.push(objInstance);
    }

    return { name: OfferProvidersEnum.PROVIDER_1, offers };
  }

  async fetchProvider2LocalOffers() {
    // Getting root list of offers for ProviderOne
    const rawOffers = JSON.parse(JSON.stringify(_.values(payload2.data)));

    const offers = [];

    for (const offer of rawOffers) {
      const { hasErrors, objInstance } = await validatorDto(
        ProviderTwoOfferDto,
        offer,
      );
      if (hasErrors) continue;
      offers.push(objInstance);
    }

    return { name: OfferProvidersEnum.PROVIDER_2, offers };
  }
}
