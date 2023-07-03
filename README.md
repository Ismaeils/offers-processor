## Description

Simple API that makes use of different offer/s payloads and transform them into one entity.

## Assumptions

Basically, there was more than one approach to go for here. The first is to do it in a web-scraper generalised kind of way, and the second is to implement it using predefined DTOs and transformers. I chose the later.

- Made use of the existing payloads
- Created DTOs and used decorators to transform them into an object that is a replica of the Offer Entity.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
