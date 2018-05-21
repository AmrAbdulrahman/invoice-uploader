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

export const reducer = createReducer(initialState, {
  [Types.ADD_ADDITIONAL_FILE]: addAdditionalFile,
  [Types.REMOVE_ADDITIONAL_FILE]: removeAdditionalFile,
});
export const InvoiceTypes = Types;
export default Creators;
