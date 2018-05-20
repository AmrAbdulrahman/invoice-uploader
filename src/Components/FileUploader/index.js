import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import get from 'lodash/get';
import each from 'lodash/each';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import Dropzone from 'react-dropzone';
import Loading from '../Loading';

import styles from './styles';
import UploadsActions from '../../Redux/Uploads';
import Strings from '../../Services/Strings';

class FileUploader extends Component {
  get file() {
    const { uploads, identifier } = this.props;
    return get(uploads, identifier, {});
  }

  onDrop = files => {
    const { identifier, upload } = this.props;

    each(
      files,
      file => upload(identifier, file)
    );
  };

  renderLoading() {
    const { classes } = this.props;

    return (
      <div className={classes.file}>
        <Loading>{Strings.uploading}</Loading>
      </div>
    );
  }

  renderFilePreview() {
    const { classes, identifier } = this.props;

    return (
      <div className={classes.file}>
        <Typography>
          {this.file.name}

          <IconButton className={classes.removeIcon} onClick={() => this.props.remove(identifier)}>
            <ClearIcon />
          </IconButton>
        </Typography>

      </div>
    );
  }

  renderFileSelector() {
    const { classes, multiple, buttonText, accept } = this.props;

    return (
      <Dropzone onDrop={this.onDrop} className={classes.dropzone} multiple={multiple} accept={accept}>
        <Typography>
          <Button variant="raised" size="small">{buttonText}</Button> or drag and drop file{multiple ? 's' : ''}
        </Typography>
      </Dropzone>
    );
  }

  render() {
    if (this.file.loading) {
      return this.renderLoading();
    }

    if (this.file.uploaded) {
      return this.renderFilePreview();
    }

    return this.renderFileSelector();
  }
}

FileUploader.propTypes = {
  identifier: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  multiple: PropTypes.bool,
  accept: PropTypes.string,
};

FileUploader.defaultProps = {
  multiple: false,
  accept: 'image/*, .pdf',
};

const mapStateToProps = state => ({
  uploads: state.uploads,
});

const mapDispatchToProps = dispatch => ({
  upload: (identifier, file) => dispatch(UploadsActions.upload(identifier, file)),
  remove: identifier => dispatch(UploadsActions.remove(identifier)),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(FileUploader)
);
