import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const initialState = Immutable({});

const { Types, Creators } = createActions({
  upload: [ 'identifier', 'file' ],
  uploadSuccess: [ 'identifier', 'file' ],
  uploadError: [ 'identifier', 'error' ],

  remove: [ 'identifier', 'file' ],
  removeSuccess: [ 'identifier' ],
  removeError: [ 'identifier', 'error' ],
}, {
  prefix: 'Uploads/',
});

const upload = (state, { identifier, file }) =>
  state.merge({
    ...state,
    [identifier]: {
      loading: true,
    },
  });

const uploadSuccess = (state, { identifier, file }) =>
  state.merge({
    ...state,
    [identifier]: {
      loading: false,
      uploaded: true,
      ...file,
    },
  });

const uploadError = (state, { identifier, error }) =>
  state.merge({
    ...state,
    [identifier]: {
      loading: false,
      error,
    },
  });

const remove = (state, { identifier, file }) =>
  state.merge({
    ...state,
    [identifier]: {
      loading: true,
    },
  });

const removeSuccess = (state, { identifier }) =>
  state.merge({
    ...state,
    [identifier]: {
      loading: false,
      uploaded: false,
    },
  });

const removeError = (state, { identifier, error }) =>
  state.merge({
    ...state,
    [identifier]: {
      loading: false,
      error,
    },
  });

export const reducer = createReducer(initialState, {
  [Types.UPLOAD]: upload,
  [Types.UPLOAD_SUCCESS]: uploadSuccess,
  [Types.UPLOAD_ERROR]: uploadError,

  [Types.REMOVE]: remove,
  [Types.REMOVE_SUCCESS]: removeSuccess,
  [Types.REMOVE_ERROR]: removeError,
});
export const UploadsTypes = Types;
export default Creators;
