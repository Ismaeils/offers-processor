import { Logger } from '@nestjs/common';
import { ClassConstructor, plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import * as _ from 'lodash';

export const transformAndValidateDto = async <T extends ClassConstructor<any>>(
  dto: T,
  obj: object,
) => {
  const objInstance = plainToClass(dto, obj, { excludeExtraneousValues: true });
  const errors = await validate(objInstance);
  if (errors.length > 0) {
    errors.map((err) => {
      Logger.warn(
        `Offer failed validation: ${JSON.stringify(_.values(err.constraints))}`,
      );
    });
  }
  return { hasErrors: errors.length > 0, objInstance };
};
