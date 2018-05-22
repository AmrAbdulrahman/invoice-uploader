import get from 'lodash/get';
import defaults from 'lodash/defaults';
import each from 'lodash/each';

class FieldState {
  constructor(field) {
    field = defaults(field, {
      value: '',
      validators: [],
      reflectsOn: [],
      showErrorsOnDirty: false,
      showErrorsOnSubmission: true,
    }, {
      dirty: false,
      submitted: false,
      errors: [],
      onUpdate() {},
    });

    each(field, (value, key) => {
      this[key] = value;
    });

    // initial value validation
    setTimeout(() => this.validate());
  }

  validate() {
    let errors = [];

    for (let i = 0; i < this.validators.length; i++) {
      const validationResult = this.validators[i].validate(this.value);

      if (validationResult.valid === false) {
        errors.push(validationResult);
      }
    }

    this.errors = errors;
    this.isValid = errors.length === 0;
  }

  setSubmitted() {
    this.submitted = true;
    this.validate();
  }

  get shouldShowError() {
    if (this.showErrorsOnDirty && this.dirty && !this.isValid) {
      return true;
    }

    if (this.showErrorsOnSubmission && this.submitted && !this.isValid) {
      return true;
    }

    return false;
  }

  get errorMessage() {
    if (!this.shouldShowError) {
      return null;
    }

    return get(this.errors, '0.message', '');
  }

  onChange = e => {
    this.dirty = true;
    this.value = e.target.value;
    this.validate();
    this.onUpdate(this);
  };
}

export default FieldState;
