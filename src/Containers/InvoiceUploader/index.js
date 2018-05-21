import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import _get from 'lodash/get';
import styles from './styles';
import InvoiceForm from './InvoiceForm';
import AdditionalFiles from './AdditionalFiles';
import AddAdditionalFileForm from './AddAdditionalFileForm';

class InvoiceUploader extends Component {
  get invoiceIsUploaded() {
    const { uploads } = this.props;
    return !!_get(uploads, 'invoice.file.id', false);
  }

  render() {
    // const { classes } = this.props;

    return (
      <div>
        <InvoiceForm />
        {this.invoiceIsUploaded && [
          <AdditionalFiles key='additional-files' />,
          <AddAdditionalFileForm key='add-file-form' />
        ]}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  uploads: state.uploads,
});

export default compose(
  connect(mapStateToProps, null),
  withStyles(styles),
)(InvoiceUploader);
