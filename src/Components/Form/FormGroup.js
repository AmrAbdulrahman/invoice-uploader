import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styles from './styles';

class FormGroup extends Component {
  render() {
    const { classes, title, children } = this.props;

    return (
      <Grid item xs={12}>
        <Paper className={classnames(classes.formGroup, { [classes.formGroupWithTitle]: title })}>
          <Typography variant="headline" className={classes.groupTitle}>{title}</Typography>

          <Grid container>
            { children }
          </Grid>
        </Paper>
      </Grid>
    );
  }
}

FormGroup.propTypes = {
  classes: PropTypes.object,
  title: PropTypes.string,
  children: PropTypes.any,
};

export default withStyles(styles)(FormGroup);
