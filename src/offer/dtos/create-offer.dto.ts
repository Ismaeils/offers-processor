import { IsNotEmpty } from 'class-validator';

export class CreateOfferDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  requirements: string;

  @IsNotEmpty()
  thumbnail: string;

  @IsNotEmpty()
  isDesktop: boolean;

  @IsNotEmpty()
  isAndroid: boolean;

  @IsNotEmpty()
  isIos: boolean;

  @IsNotEmpty()
  offerUrlTemplate: string;

  @IsNotEmpty()
  providerName: string;

  @IsNotEmpty()
  externalOfferId: string;
}
