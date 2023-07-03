import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OfferModule } from './offer/offer.module';
import { OfferProviderModule } from './offer-provider/offer-provider.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Offer } from './offer/entities/offer.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    OfferModule,
    OfferProviderModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        port: 5432,
        host: configService.get<string>('DB_HOST'),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASS'),
        database: configService.get<string>('DB_NAME'),
        synchronize: true,
        entities: [Offer],
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
