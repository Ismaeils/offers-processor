import { Logger } from '@nestjs/common';
import { ClassConstructor, plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import * as _ from 'lodash';

export const validatorDto = async <T extends ClassConstructor<any>>(
  dto: T,
  obj: object,
) => {
  // tranform the literal object to class object
  const objInstance = plainToClass(dto, obj, { excludeExtraneousValues: true });
  // validating and check the errors, throw the errors if exist
  const errors = await validate(objInstance);
  // errors is an array of validation errors
  if (errors.length > 0) {
    errors.map((err) => {
      Logger.warn(
        `Offer failed validation: ${JSON.stringify(_.values(err.constraints))}`,
      );
    });
  }
  return { hasErrors: errors.length > 0, objInstance };
};
