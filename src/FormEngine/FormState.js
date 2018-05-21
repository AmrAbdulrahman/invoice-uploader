import reduce from 'lodash/reduce';
import set from 'lodash/set';
import each from 'lodash/each';
import FieldState from './FieldState';

class FormState {
  // 'key' is the form key in state, enables multiple forms per component
  constructor({ key, component, fields }) {
    this.key = key;
    this.component = component;

    // for each field, create new Field, and hook up onUpdate/setState
    this.fields = reduce(fields, (fields, field, name) => {
      const fieldState = new FieldState({
        name,
        ...field,
        onUpdate: update => this.onFieldUpdate(name, update),
      });

      return set(fields, name, fieldState);
    }, {});
  }

  // setState of host Component on FieldUpdate
  onFieldUpdate = (name, newState) => {
    this.fields[name] = newState;

    this.flush();
  };

  onSubmitAttempt = () => {
    // set submitted = true for all fields
    each(this.fields, field => field.setSubmitted());

    this.flush();
  };

  // triggers component.setState
  flush = () => {
    this.component.setState({
      [this.key]: this,
    });
  };

  // gives flexibility to set fields value manually
  // helpful in case of complex ui components like 'FileUpload'
  updateFieldValue = (name, value) => {
    this.fields[name].value = value;

    this.flush();
  };

  clear = name => {
    this.fields[name].value = '';

    this.flush();
  };

  get isValid() {
    return reduce(this.fields, (allValid, field) => allValid && field.isValid, true);
  }

  get values() {
    return reduce(this.fields, (allValues, field) => set(allValues, field.name, field.value), {});
  }
}

export default FormState;
