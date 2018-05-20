import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NavLink from '../../Components/NavLink';
import Strings from '../../Services/Strings';

import styles from './styles';

class Home extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography>
          {Strings.homePlaceholderMessage}
        </Typography>
        <NavLink to="/invoice-uploader" className={classes.link}>
          <Typography color="primary">
            {Strings.uploadInvoice}
          </Typography>
        </NavLink>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
