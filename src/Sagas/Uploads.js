import { delay } from 'redux-saga'
import { put, call } from 'redux-saga/effects';
import UploadsActions from '../Redux/Uploads';
// import Api from '../Services/Api';

function * upload({ identifier, file }) {
  // mock
  yield delay(3000);
  yield put(UploadsActions.uploadSuccess(identifier, {
    id: 1,
    name: file.name,
  }));


  // if (res.ok) {
  // } else {
  //   yield put(EventsActions.uploadError(res.error));
  // }
}

function * remove({ identifier, file }) {
  // mock
  yield delay(3000);
  yield put(UploadsActions.removeSuccess(identifier));


  // if (res.ok) {
  // } else {
  //   yield put(EventsActions.uploadError(res.error));
  // }
}

export default {
  upload,
  remove,
};
