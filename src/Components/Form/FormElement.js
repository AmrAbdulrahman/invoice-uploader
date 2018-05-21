import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import styles from './styles';

class FormElement extends Component {
  render() {
    const { classes, className, children, xs, sm, md, lg, xl } = this.props;

    // bind breakpoints props dynamically
    const breakpointsProps = {};

    if (sm) { breakpointsProps.sm = sm; }
    if (md) { breakpointsProps.md = md; }
    if (lg) { breakpointsProps.lg = lg; }
    if (xl) { breakpointsProps.xl = xl; }

    return (
      <Grid className={classnames(classes.formElement, className)} item xs={xs} {...breakpointsProps}>
        { children }
      </Grid>
    );
  }
}

FormElement.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.any,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
};

FormElement.defaultProps = {
  xs: 12,
};

export default withStyles(styles)(FormElement);
