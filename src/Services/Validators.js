import Strings from './Strings';
import template from 'lodash/template';

export class Validator {
  constructor({ key, message, validator }) {
    this.key = key;
    this.message = message;
    this.validator = validator;
  }

  validate(value, field, form) {
    const { key, message } = this;
    const validation = this.validator(value, field, form);

    return {
      key,
      message,
      valid: validation,
    };
  }
}

export const isRequired = (message = Strings.fieldIsRequired) => new Validator({
  key: 'REQUIRED',
  message,
  validator: value => (value === null || value === undefined) ? false : `${value}`.trim().length > 0,
});

export const minLength = (length = 5, message = Strings.minLengthValidation) => new Validator({
  key: 'MIN_LENGTH',
  message: template(message)({ length }),
  validator: value => `${value}`.length >= length,
});

export const maxLength = (length = 20, message = Strings.maxLengthValidation) => new Validator({
  key: 'MAX_LENGTH',
  message: template(message)({ length }),
  validator: value => `${value}`.length <= length,
});

export const onlyNumbers = (message = Strings.onlyNumbersValidation) => new Validator({
  key: 'ONLY_NUMBERS',
  message,
  validator: value => /^\d*$/ig.test(`${value}`),
});
