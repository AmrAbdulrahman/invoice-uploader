import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import FileUploader from '../../Components/FileUploader';

import styles from './styles';

class InvoiceUploader extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FileUploader identifier="invoice" buttonText="Upload invoice" />
      </div>
    );
  }
}

export default withStyles(styles)(InvoiceUploader);
