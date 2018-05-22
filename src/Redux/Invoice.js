import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import filter from 'lodash/filter';
import pickBy from 'lodash/pickBy';

const initialState = Immutable({
  loading: false,
  invoice: {
    file: null,
    amount: null,
    target: null,
    receipent: null,
  },
  additionalFilesIds: [], // to preserve order
  additionalFilesById: {}, // normalize files state
});

const { Types, Creators } = createActions({
  addAdditionalFile: [ 'file' ],
  removeAdditionalFile: [ 'id' ],
  resetAdditionalFiles: null,
  submit: [ 'invoice' ],
  submitSuccess: null,
  submitError: [ 'error' ],
}, {
  prefix: 'Invoice/',
});

const addAdditionalFile = (state, { file }) =>
  state.merge({
    additionalFilesIds: [ ...state.additionalFilesIds, file.id ],
    additionalFilesById: {
      ...state.additionalFilesById,
      [file.id]: file,
    },
  });

const removeAdditionalFile = (state, { id }) =>
  state.merge({
    additionalFilesIds: filter(state.additionalFilesIds, id_ => `${id_}` !== `${id}`),
    additionalFilesById: pickBy(state.additionalFilesById, (file, id_) => `${id_}` !== `${id}`),
  });

const resetAdditionalFiles = state =>
  state.merge({
    additionalFilesIds: [],
    additionalFilesById: {},
  });

const submit = (state, { invoice }) =>
  state.merge({ loading: true, invoice });

const submitSuccess = state => initialState;

const submitError = (state, { error }) =>
  state.merge({ loading: false, error });

export const reducer = createReducer(initialState, {
  [Types.ADD_ADDITIONAL_FILE]: addAdditionalFile,
  [Types.REMOVE_ADDITIONAL_FILE]: removeAdditionalFile,
  [Types.RESET_ADDITIONAL_FILES]: resetAdditionalFiles,
  [Types.SUBMIT]: submit,
  [Types.SUBMIT_SUCCESS]: submitSuccess,
  [Types.SUBMIT_ERROR]: submitError,
});
export const InvoiceTypes = Types;
export default Creators;
