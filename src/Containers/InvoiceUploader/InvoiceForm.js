import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import FileUploader from '../../Components/FileUploader';
import Form, { FormGroup, FormElement } from '../../Components/Form';
import Strings from '../../Services/Strings';
import UploadsActions from '../../Redux/Uploads';
import InvoiceActions from '../../Redux/Invoice';
import styles from './styles';

class InvoiceForm extends Component {
  onSubmit = (...args) => {
    // console.log(...args);
    this.state.form.onSubmit();
  };

  render() {
    // const { classes, invoice } = this.props;

    return (
      <Form onSubmit={this.onSubmit}>
        <FormGroup title={Strings.invoice}>
          <FormElement>
            <FileUploader
              identifier="invoice"
              buttonText={Strings.uploadInvoice}
            />
          </FormElement>
        </FormGroup>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  invoice: state.invoice,
});

const mapDispatchToProps = dispatch => ({
  resetFileUpload: identifier => dispatch(UploadsActions.reset(identifier)),
  addAdditionalFile: file => dispatch(InvoiceActions.addAdditionalFile(file)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles),
)(InvoiceForm);
