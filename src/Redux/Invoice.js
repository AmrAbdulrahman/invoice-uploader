import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import filter from 'lodash/filter';
import pickBy from 'lodash/pickBy';

const initialState = Immutable({
  invoice: {
    fileId: null,
    receipent: null,
    amount: null,
    target: null,
  },
  additionalFilesIds: [], // to preserve order
  additionalFilesById: {}, // normalize files state
});

const { Types, Creators } = createActions({
  addAdditionalFile: [ 'file' ],
  removeAdditionalFile: [ 'id' ],
  resetAdditionalFiles: null,
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


export const reducer = createReducer(initialState, {
  [Types.ADD_ADDITIONAL_FILE]: addAdditionalFile,
  [Types.REMOVE_ADDITIONAL_FILE]: removeAdditionalFile,
  [Types.RESET_ADDITIONAL_FILES]: resetAdditionalFiles,
});
export const InvoiceTypes = Types;
export default Creators;
