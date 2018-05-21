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

  reset: [ 'identifier' ],
}, {
  prefix: 'Uploads/',
});

const upload = (state, { identifier, file }) =>
  state.merge({
    ...state,
    [identifier]: {
      uploading: true,
    },
  });

const uploadSuccess = (state, { identifier, file }) =>
  state.merge({
    ...state,
    [identifier]: {
      uploading: false,
      uploaded: true,
      file,
    },
  });

const uploadError = (state, { identifier, error }) =>
  state.merge({
    ...state,
    [identifier]: {
      uploading: false,
      error,
    },
  });

const remove = (state, { identifier, file }) =>
  state.merge({
    ...state,
    [identifier]: {
      removing: true,
    },
  });

const removeSuccess = (state, { identifier }) =>
  state.merge({
    ...state,
    [identifier]: {
      removing: false,
      uploaded: false,
    },
  });

const removeError = (state, { identifier, error }) =>
  state.merge({
    ...state,
    [identifier]: {
      removing: false,
      error,
    },
  });

const reset = (state, { identifier }) =>
  state.merge({
    ...state,
    [identifier]: {},
  });

export const reducer = createReducer(initialState, {
  [Types.UPLOAD]: upload,
  [Types.UPLOAD_SUCCESS]: uploadSuccess,
  [Types.UPLOAD_ERROR]: uploadError,

  [Types.REMOVE]: remove,
  [Types.REMOVE_SUCCESS]: removeSuccess,
  [Types.REMOVE_ERROR]: removeError,

  [Types.RESET]: reset,
});
export const UploadsTypes = Types;
export default Creators;
