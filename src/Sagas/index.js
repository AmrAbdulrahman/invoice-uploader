import { all, takeEvery } from 'redux-saga/effects';
import { UploadsTypes } from '../Redux/Uploads';
import uploadsSagas from './Uploads';

export default function * root() {
  yield all([
    takeEvery(UploadsTypes.UPLOAD, uploadsSagas.upload),
    takeEvery(UploadsTypes.REMOVE, uploadsSagas.remove),
  ]);
}
