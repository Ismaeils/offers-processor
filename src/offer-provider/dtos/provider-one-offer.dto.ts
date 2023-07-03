import { Expose, Transform } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import { OfferProvidersEnum } from '../enums/provider.enum';

export class ProviderOneOfferDto {
  @IsNotEmpty()
  @Expose({ name: `providerName` })
  @Transform(() => OfferProvidersEnum.PROVIDER_1)
  providerName: OfferProvidersEnum;

  @IsNotEmpty()
  @Expose({ name: `externalOfferId` })
  @Transform((value: any) => value.obj.offer_id)
  externalOfferId: string;

  @IsNotEmpty()
  @Expose({ name: `name` })
  @Transform((value: any) => value.obj.offer_name)
  name: string;

  @IsNotEmpty()
  @Expose({ name: `description` })
  @Transform((value: any) => value.obj.offer_desc)
  description: string;

  @IsNotEmpty()
  @Expose({ name: `requirements` })
  @Transform((value: any) => value.obj.call_to_action)
  requirements: string;

  @IsNotEmpty()
  @Expose({ name: `offerUrlTemplate` })
  @Transform((value: any) => value.obj.offer_url)
  offerUrlTemplate: string;

  @IsNotEmpty()
  @Expose({ name: `thumbnail` })
  @Transform((value: any) => value.obj.image_url)
  thumbnail: string;

  @IsNotEmpty()
  @Expose({ name: `isDesktop` })
  @Transform((value: any) => (value.obj.platform == 'mobile' ? false : true))
  isDesktop: boolean;

  @IsNotEmpty()
  @Expose({ name: `isAndroid` })
  @Transform((value: any) => !(value.obj.device == 'iphone_ipad'))
  isAndroid: boolean;

  @IsNotEmpty()
  @Expose({ name: `isIos` })
  @Transform((value: any) => value.obj.device == 'iphone_ipad')
  isIos: boolean;
}
