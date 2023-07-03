## Description

Simple API that makes use of different offer/s payloads and transform them into one entity.

## Assumptions

Basically, there was more than one approach to go for here. The first is to do it in a web-scraper generalised kind of way, and the second is to implement it using predefined DTOs and transformers. I chose the later.

- Made use of the existing payloads
- Created DTOs and used decorators to transform them into an object that is a replica of the Offer Entity.

## Modules

- `Offer` => This handles all whats related to the Offer entity, and that includes basic crud operations and the main route that is made for the purpose of simulating what it would look like if these payloads were to be fetched from other sources.
- `OfferProvider` => This handles all related fetching, mapping, transformation of payloads of providers into something that is digestable for the Offer model

## Endpoints

- POST `offer/fetch-local/:provider` => this is the main endpoint that takes in a provide name as a param, goes to fetch said provider payload of offers, map them into their corresponding DTO, convert to Offer entity, and lastly store them.
- CRUD `offer` => also conventional crud handlers are set for to get,create,update,delete existing offers in db.

## Providers

Currently, there is only two possible provider names

```
export enum OfferProvidersEnum {
  PROVIDER_1 = `provider_one`,
  PROVIDER_2 = `provider_two`,
}

```

To make the app handle more providers, you have to extend `OfferProvidersEnum` with your desired provider and then add its specified DTO by using `@Expose()` and `@Transform()` decorators to get the desired shape as done in `provider-one-offer.dto` and `provider-one-offer.dto`.

## Validator

In `OfferProvider` module, there is a `provider.validator` that takes in the payload and the DTO type. It's responsible for checking the validity of the DTO and it returns the instance and the errors if any. There also will happen the `WARN` log if the offer was invalid for any reason. eg `WARN Offer failed validation: ["externalOfferId should not be empty"]`

## Installation

```bash
$ npm install
```

## Running the app

```bash
# watch mode
$ npm run start:dev

```
