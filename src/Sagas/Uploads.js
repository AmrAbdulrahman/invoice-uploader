import { put, call, select } from 'redux-saga/effects';
import UploadsActions from '../Redux/Uploads';
import Api from '../Services/Api';

function * upload({ identifier, file }) {
  // construct form data out of the file object
  const fileFormData = new FormData();
  fileFormData.append('file', file, file.name);

  // upload file
  const res = yield call(Api.file.upload, fileFormData);

  if (res.ok) {
    yield put(UploadsActions.uploadSuccess(identifier, res.data));
  } else {
    yield put(UploadsActions.uploadError(res.error));
  }
}

function * remove({ identifier }) {
  console.log(identifier);
  const file = yield select(state => {
    console.log(state, state.uploads, state.uploads[identifier]);
    return state.uploads[identifier].file;
  });
  const res = yield call(Api.file.remove, file.id);

  if (res.ok) {
    yield put(UploadsActions.removeSuccess(identifier));
  } else {
    yield put(UploadsActions.removeError(res.error));
  }
}

export default {
  upload,
  remove,
};
