import { Expose, Transform } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import { OfferProvidersEnum } from '../enums/provider.enum';

export class ProviderTwoOfferDto {
  @IsNotEmpty()
  @Expose({ name: `providerName` })
  @Transform(() => OfferProvidersEnum.PROVIDER_2)
  providerName: OfferProvidersEnum;

  @IsNotEmpty()
  @Expose({ name: `externalOfferId` })
  @Transform((value: any) => value.obj.Offer.campaign_id)
  externalOfferId: string;

  @IsNotEmpty()
  @Expose({ name: `name` })
  @Transform((value: any) => value.obj.Offer.name)
  name: string;

  @IsNotEmpty()
  @Expose({ name: `description` })
  @Transform((value: any) => value.obj.Offer.description)
  description: string;

  @IsNotEmpty()
  @Expose({ name: `requirements` })
  @Transform((value: any) => value.obj.Offer.instructions)
  requirements: string;

  @IsNotEmpty()
  @Expose({ name: `offerUrlTemplate` })
  @Transform((value: any) => value.obj.Offer.tracking_url)
  offerUrlTemplate: string;

  @IsNotEmpty()
  @Expose({ name: `thumbnail` })
  @Transform((value: any) => value.obj.Offer.icon)
  thumbnail: string;

  @IsNotEmpty()
  @Expose({ name: `isDesktop` })
  @Transform((value: any) => value.obj.OS.web)
  isDesktop: boolean;

  @IsNotEmpty()
  @Expose({ name: `isAndroid` })
  @Transform((value: any) => value.obj.OS.android)
  isAndroid: boolean;

  @IsNotEmpty()
  @Expose({ name: `isIos` })
  @Transform((value: any) => value.obj.OS.ios)
  isIos: boolean;
}
