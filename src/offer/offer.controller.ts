import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { OfferService } from './offer.service';
import { CreateOfferDto } from './dtos/create-offer.dto';
import { UpdateOfferDto } from './dtos/update-offer.dto';

@Controller('offer')
export class OfferController {
  constructor(private readonly offerService: OfferService) {}

  @Post('fetch-local/:provider')
  fetchLocalOffers(@Param('provider') provider: string) {
    return this.offerService.fetchAndStoreLocal(provider);
  }

  @Post()
  create(@Body() createOfferDto: CreateOfferDto) {
    return this.offerService.create(createOfferDto);
  }

  @Get()
  findAll() {
    return this.offerService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const offer = await this.offerService.findOne(+id);
    if (!offer)
      throw new NotFoundException(
        `This offer does not exist, you are so lost sir`,
      );
    return offer;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateOfferDto: UpdateOfferDto,
  ) {
    const offer = await this.offerService.update(+id, updateOfferDto);
    if (!offer)
      throw new NotFoundException(`This offer does not exist to update`);
    return offer;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.offerService.remove(+id);
  }
}
