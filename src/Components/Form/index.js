import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormGroup from './FormGroup';
import FormElement from './FormElement';
import styles from './styles';

class Form extends Component {
  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(e);
  };

  render() {
    const { classes, children } = this.props;

    return (
      <form onSubmit={this.onSubmit} className={classes.form}>
        <Grid container spacing={16}>
          { children }
        </Grid>
      </form>
    );
  }
}

Form.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.object,
  onSubmit: PropTypes.func,
};

Form.defaultProps = {
  onSubmit() {},
};

export { FormGroup };
export { FormElement };
export default withStyles(styles)(Form);
