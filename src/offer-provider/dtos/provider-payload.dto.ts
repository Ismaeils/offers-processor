import { ProviderOneOfferDto } from './provider-one-offer.dto';
import { ProviderTwoOfferDto } from './provider-two-offer.dto';

export class ProviderPayloadDto {
  name: string;
  offers: ProviderOneOfferDto[] | ProviderTwoOfferDto[];
}
