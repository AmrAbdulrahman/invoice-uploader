import Strings from './Strings';

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
