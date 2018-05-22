import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from 'Components/Modal';
import FileUploader from 'Components/FileUploader';
import Form, { FormGroup, FormElement } from 'Components/Form';
import FormState from 'FormEngine/FormState';
import Strings from 'Services/Strings';
import UploadsActions from '../../Redux/Uploads';
import InvoiceActions from '../../Redux/Invoice';
import {
  Validator,
  isRequired,
  maxLength,
  exactLength,
  onlyNumbers,
} from '../../Services/Validators';
import styles from './styles';


class InvoiceForm extends Component {
  constructor(props) {
    super(props);

    // special validator to show summary errors inside receipient modal
    const receipientValidator = () => new Validator({
      key: 'RECEIPIENT',
      message: Strings.checkReceipientErrors,
      validator: () => {
        const {
          receipientName,
          receipientSurname,
          receipientAddress,
          receipientPhone,
        } = this.state.form.fields;

        return (
          receipientName.isValid &&
          receipientSurname.isValid &&
          receipientAddress.isValid &&
          receipientPhone.isValid
        );
      },
    });

    this.state = {
      receipientModalOpen: false,
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
          receipientName: {
            value: '',
            validators: [ isRequired(), maxLength() ],
            reflectsOn: [ 'receipient' ], // re-runs 'receipient' validator
          },
          receipientSurname: {
            value: '',
            validators: [ isRequired(), maxLength() ],
            reflectsOn: [ 'receipient' ],
          },
          receipientAddress: {
            value: '',
            validators: [ isRequired(), maxLength() ],
            reflectsOn: [ 'receipient' ],
          },
          receipientPhone: {
            value: '',
            validators: [ isRequired(), onlyNumbers(), exactLength(9) ],
            reflectsOn: [ 'receipient' ],
          },
          receipient: {
            value: null,
            validators: [ receipientValidator() ],
          },
        },
        transformer: ({ file, amount, target, ...receipient }) => ({
          file,
          amount,
          target,
          receipient: {
            name: receipient.receipientName,
            surname: receipient.receipientSurname,
            address: receipient.receipientAddress,
            phone: receipient.receipientPhone,
          },
        }),
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

  openReceipientModal = () => {
    this.setState({
      receipientModalOpen: true,
    });
  };

  closeReceipientModal = () => {
    this.setState({
      receipientModalOpen: false,
    });
  };

  onSubmit = (...args) => {
    const { form } = this.state;

    // show errors if any
    form.onSubmitAttempt();

    if (form.isValid) {
      this.props.submit(form.values);
    }
  };

  componentWillUnmount() {
    this.props.resetFile('invoice');
  }

  render() {
    const { classes } = this.props;
    const {
      amount,
      target,
      receipient,
      receipientName,
      receipientSurname,
      receipientAddress,
      receipientPhone,
    } = this.state.form.fields;

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

            <FormElement key="receipient" sm={6}>
              <Button
                variant="raised"
                color="primary"
                onClick={this.openReceipientModal}
                className={classnames({ [classes.buttonWithError]: receipient.shouldShowError })}
              >
                {receipient.isValid ? Strings.editReceipient : Strings.addReceipient}
              </Button>

              {receipient.shouldShowError && (
                <Typography className={classes.errorMessage}>{receipient.errorMessage}</Typography>
              )}

              <Modal
                title={Strings.receipient}
                open={this.state.receipientModalOpen}
                onClose={this.closeReceipientModal}
              >
                <FormElement>
                  <TextField
                    fullWidth
                    autoFocus={true}
                    label={Strings.name}
                    value={receipientName.value}
                    error={receipientName.shouldShowError}
                    helperText={receipientName.errorMessage || ' '}
                    onChange={receipientName.onChange}
                  />
                </FormElement>
                <FormElement>
                  <TextField
                    fullWidth
                    label={Strings.surname}
                    value={receipientSurname.value}
                    error={receipientSurname.shouldShowError}
                    helperText={receipientSurname.errorMessage || ' '}
                    onChange={receipientSurname.onChange}
                  />
                </FormElement>
                <FormElement>
                  <TextField
                    fullWidth
                    label={Strings.address}
                    value={receipientAddress.value}
                    error={receipientAddress.shouldShowError}
                    helperText={receipientAddress.errorMessage || ' '}
                    onChange={receipientAddress.onChange}
                  />
                </FormElement>
                <FormElement>
                  <TextField
                    fullWidth
                    label={Strings.phone}
                    value={receipientPhone.value}
                    error={receipientPhone.shouldShowError}
                    helperText={receipientPhone.errorMessage || ' '}
                    onChange={receipientPhone.onChange}
                  />
                </FormElement>
                <FormElement className={classes.actionsWrapper}>
                  <Button
                    variant="raised"
                    color="primary"
                    onClick={this.closeReceipientModal}
                  >
                    {Strings.save}
                  </Button>
                </FormElement>
              </Modal>
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
  resetFile: identifier => dispatch(UploadsActions.reset(identifier)),
  resetAdditionalFiles: () => dispatch(InvoiceActions.resetAdditionalFiles()),
  submit: invoice => dispatch(InvoiceActions.submit(invoice)),
});

export default compose(
  connect(null, mapDispatchToProps),
  withStyles(styles),
)(InvoiceForm);
