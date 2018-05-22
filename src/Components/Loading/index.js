import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import LoadingIcon from 'Components/LoadingIcon';
import Strings from 'Services/Strings';
import styles from './styles';

class Loading extends Component {
  render() {
    const { classes, children } = this.props;

    return (
      <div className={classes.root}>
        <LoadingIcon className={classes.icon} />
        <Typography>
          {children || Strings.loading}
        </Typography>
      </div>
    );
  }
}

Loading.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(Loading);
