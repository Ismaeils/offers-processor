import { Injectable } from '@nestjs/common';
import { UpdateOfferDto } from './dtos/update-offer.dto';
import { OfferProviderService } from 'src/offer-provider/offer-provider.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Offer } from './entities/offer.entity';
import { Repository } from 'typeorm';
import { CreateOfferDto } from './dtos/create-offer.dto';

@Injectable()
export class OfferService {
  constructor(
    @InjectRepository(Offer)
    private offersRepository: Repository<Offer>,
    private offerProviderService: OfferProviderService,
  ) {}

  async create(offerDto: CreateOfferDto) {
    const createableOffers = this.offersRepository.create(
      Offer.toModel(offerDto),
    );
    return await this.offersRepository.save(createableOffers);
  }

  async findAll() {
    return await this.offersRepository.find();
  }

  async findOne(id: number) {
    return await this.offersRepository.findOne({ where: { id } });
  }

  async update(id: number, updateOfferDto: UpdateOfferDto) {
    return await this.offersRepository.update(
      { id },
      Offer.toModel(updateOfferDto),
    );
  }

  async remove(id: number) {
    return await this.offersRepository.delete({ id });
  }

  async fetchLocal(offerProvider: string) {
    const providerOffers = await this.offerProviderService.getMoreOffers(
      offerProvider,
    );
    const offers: Offer[] = providerOffers.offers.map((offer) =>
      Offer.toModel(offer),
    );
    const createableOffers = this.offersRepository.create(offers);
    return await this.offersRepository.save(createableOffers);
  }
}
