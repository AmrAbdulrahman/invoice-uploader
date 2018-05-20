import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import UploadIcon from '@material-ui/icons/CloudUpload';
import NavLink from '../NavLink';

import Strings from '../../Services/Strings';
import styles from './styles';

export class HeaderBase extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              <NavLink to="/" className={classes.homeLink} activeClassName={classes.homeLinkActive}>
                {Strings.navHeadline}
              </NavLink>
            </Typography>

            <NavLink to="/invoice-uploader" className={classes.navLink}>
              <UploadIcon className={classes.navLinkIcon} />
              {Strings.uploadInvoice}
            </NavLink>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

HeaderBase.propTypes = {
  classes: PropTypes.object,
  toggleDrawer: PropTypes.func,
};

export default withStyles(styles)(HeaderBase);
