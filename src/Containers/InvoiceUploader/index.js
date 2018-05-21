import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
// import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import FileUploader from '../../Components/FileUploader';
// import Form, { FormGroup, FormElement } from '../../Components/Form';
// import FormState from '../../FormEngine/FormState';
// import Strings from '../../Services/Strings';
// import UploadsActions from '../../Redux/Uploads';
// import InvoiceActions from '../../Redux/Invoice';
// import {
//   isRequired,
// } from '../../Services/Validators';
import styles from './styles';
import InvoiceForm from './InvoiceForm';
import AdditionalFiles from './AdditionalFiles';
import AddAdditionalFileForm from './AddAdditionalFileForm';

class InvoiceUploader extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <InvoiceForm />
        <AdditionalFiles />
        <AddAdditionalFileForm />
        <div className={classnames(classes.actionsWrapper, classes.requestActions)}>
          <Button variant="raised" color="primary">Submit</Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  // invoice: state.invoice,
});

const mapDispatchToProps = dispatch => ({
  // resetFileUpload: identifier => dispatch(UploadsActions.reset(identifier)),
  // addAdditionalFile: file => dispatch(InvoiceActions.addAdditionalFile(file)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles),
)(InvoiceUploader);
