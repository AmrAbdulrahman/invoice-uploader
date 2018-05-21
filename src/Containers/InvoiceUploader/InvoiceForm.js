import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FileUploader from '../../Components/FileUploader';
import Form, { FormGroup, FormElement } from '../../Components/Form';
import FormState from '../../FormEngine/FormState';
import Strings from '../../Services/Strings';
import UploadsActions from '../../Redux/Uploads';
import InvoiceActions from '../../Redux/Invoice';
import {
  isRequired,
  maxLength,
  onlyNumbers,
} from '../../Services/Validators';
import styles from './styles';

class InvoiceForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: new FormState({
        component: this,
        key: 'form',
        fields: {
          file: {
            value: null,
          },
          amount: {
            value: '',
            validators: [ isRequired(), onlyNumbers(), maxLength(10) ],
          },
          target: {
            value: '',
            validators: [ isRequired() ],
          },
        }
      }),
    };
  }

  onInvoiceUpload = file => {
    this.state.form.updateFieldValue('file', file);
  };

  onInvoiceRemove = file => {
    const { form } = this.state;

    this.props.resetAdditionalFiles();
    form.updateFieldValue('file', null);
    form.clear('amount');
    form.clear('target');
  };

  onCancelClick = () => {
    const { form } = this.state;

    form.clear('amount');
    form.clear('target');
    this.props.removeFile('invoice');
  };

  onSubmit = (...args) => {
    const { form } = this.state;

    // show errors if any
    form.onSubmitAttempt();

    if (form.isValid) {
      console.log(form.values);
    }
  };

  render() {
    const { classes } = this.props;
    const { amount, target } = this.state.form.fields;

    return (
      <Form onSubmit={this.onSubmit}>
        <FormGroup title={Strings.invoice}>
          <FormElement>
            <FileUploader
              identifier="invoice"
              buttonText={Strings.uploadInvoice}
              onFileUpload={this.onInvoiceUpload}
              onFileRemove={this.onInvoiceRemove}
            />
          </FormElement>

          {this.state.form.fields.file.value && [
            <FormElement key="amount" sm={6}>
              <TextField
                fullWidth
                autoFocus={true}
                label={Strings.invoiceAmount}
                value={amount.value}
                error={amount.shouldShowError}
                helperText={amount.errorMessage || Strings.invoiceAmountInEuro}
                onChange={amount.onChange}
              />
            </FormElement>,

            <FormElement key="target" sm={6}>
              <TextField
                fullWidth
                type="date"
                label={Strings.paymentTarget}
                value={target.value}
                error={target.shouldShowError}
                helperText={target.errorMessage || Strings.paymentTargetDate}
                onChange={target.onChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </FormElement>,

            <FormElement key="description" className={classes.actionsWrapper}>
              <Button variant="raised" color="primary" type="submit">{Strings.submit}</Button>
              <Button color="default" onClick={this.onCancelClick}>{Strings.cancel}</Button>
            </FormElement>
          ]}
        </FormGroup>
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  removeFile: identifier => dispatch(UploadsActions.remove(identifier)),
  resetAdditionalFiles: () => dispatch(InvoiceActions.resetAdditionalFiles()),
});

export default compose(
  connect(null, mapDispatchToProps),
  withStyles(styles),
)(InvoiceForm);
