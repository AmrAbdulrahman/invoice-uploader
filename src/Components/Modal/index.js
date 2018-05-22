import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import styles from './styles';

class ModalComponent extends Component {
  render() {
    const { classes, title, open, children, onClose } = this.props;

    return (
      <Modal
        open={open}
        onClose={onClose}
      >
        <Paper className={classes.modalContent}>
          <Typography variant="headline">{title}</Typography>
          {children}
        </Paper>
      </Modal>
    );
  }
}

ModalComponent.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.any,
  title: PropTypes.string,
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

ModalComponent.defaultProps = {
  open: false,
  onClose() {},
};

export default withStyles(styles)(ModalComponent);
