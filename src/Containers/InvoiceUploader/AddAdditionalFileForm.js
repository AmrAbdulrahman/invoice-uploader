import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FileUploader from '../../Components/FileUploader';
import Form, { FormGroup, FormElement } from '../../Components/Form';
import FormState from '../../FormEngine/FormState';
import Strings from '../../Services/Strings';
import UploadsActions from '../../Redux/Uploads';
import InvoiceActions from '../../Redux/Invoice';
import {
  isRequired,
} from '../../Services/Validators';
import styles from './styles';

class AddAdditionalFileForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDescription: false,
      form: new FormState({
        component: this,
        key: 'form',
        fields: {
          file: {
            value: null,
          },
          description: {
            value: '',
            validators: [ isRequired() ],
          },
        }
      }),
    };
  }

  onAdditionalFileUpload = file => {
    this.setState({
      showDescription: true,
    });

    this.state.form.updateFieldValue('file', file);
  };

  onAdditionalFileRemove = file => {
    this.setState({
      showDescription: false,
    });

    this.state.form.clear('description');
  };

  onCancelClick = () => {
    this.state.form.clear('description');
    this.props.removeFile('additional-file');
  };

  onSubmit = (...args) => {
    const { form } = this.state;

    form.onSubmitAttempt(); // show errors if any

    if (form.isValid) {
      this.props.addAdditionalFile({
        ...form.values.file,
        description: form.values.description,
      });
      this.props.resetFile('additional-file');
    }
  };

  render() {
    const { classes } = this.props;
    const { description } = this.state.form.fields;

    return (
      <Form onSubmit={this.onSubmit}>
        <FormGroup>
          <FormElement>
            <FileUploader
              identifier="additional-file"
              buttonText={Strings.uploadAdditionalFile}
              onFileUpload={this.onAdditionalFileUpload}
              onFileRemove={this.onAdditionalFileRemove}
            />
          </FormElement>

          {this.state.showDescription && [
            <FormElement key="file" sm={8} md={9} lg={10}>
              <TextField
                fullWidth
                autoFocus={true}
                label={'File description'}
                value={description.value}
                error={description.shouldShowError}
                helperText={description.errorMessage || ' '}
                onChange={description.onChange}
              />
            </FormElement>,

            <FormElement key="description" className={classes.actionsWrapper} sm={4} md={3} lg={2}>
              <Button variant="raised" color="primary" type="submit">Add</Button>
              <Button color="default" onClick={this.onCancelClick}>Cancel</Button>
            </FormElement>
          ]}
        </FormGroup>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  removeFile: identifier => dispatch(UploadsActions.remove(identifier)),
  resetFile: identifier => dispatch(UploadsActions.reset(identifier)),
  addAdditionalFile: file => dispatch(InvoiceActions.addAdditionalFile(file)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles),
)(AddAdditionalFileForm);
