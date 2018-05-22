import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import _get from 'lodash/get';
import LoadingOverlay from 'Components/LoadingOverlay';
import InvoiceForm from './InvoiceForm';
import AdditionalFiles from './AdditionalFiles';
import AddAdditionalFileForm from './AddAdditionalFileForm';
import styles from './styles';

class InvoiceUploader extends Component {
  get invoiceIsUploaded() {
    const { uploads } = this.props;
    return !!_get(uploads, 'invoice.file.id', false);
  }

  render() {
    const { invoice } = this.props;

    return (
      <React.Fragment>
        <LoadingOverlay active={invoice.loading} />
        <InvoiceForm />
        {this.invoiceIsUploaded && (
          <React.Fragment>
            <AdditionalFiles />
            <AddAdditionalFileForm />
          </React.Fragment>
        )}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  uploads: state.uploads,
  invoice: state.invoice,
});

export default compose(
  connect(mapStateToProps, null),
  withStyles(styles),
)(InvoiceUploader);
