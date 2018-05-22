import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import map from 'lodash/map';
import InvoiceActions from '../../Redux/Invoice';
import styles from './styles';

class InvoiceForm extends Component {
  renderFile(file) {
    const { classes } = this.props;

    return (
      <div key={file.id} className={classes.additionalFile}>
        <Typography className={classes.additionalFileName}>
          {file.name}

          <IconButton className={classes.removeIcon} onClick={() => this.props.remove(file.id)}>
            <ClearIcon />
          </IconButton>
        </Typography>

        <Typography>{file.description}</Typography>
      </div>
    );
  }

  render() {
    const { classes, invoice } = this.props;
    const { additionalFilesIds, additionalFilesById } = invoice;
    const files = map(additionalFilesIds, id => additionalFilesById[id]);

    if (files.length === 0) {
      return null;
    }

    return (
      <Paper className={classes.additionalFiles}>
        {map(files, file => this.renderFile(file))}
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  invoice: state.invoice,
});

const mapDispatchToProps = dispatch => ({
  remove: id => dispatch(InvoiceActions.removeAdditionalFile(id)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles),
)(InvoiceForm);
