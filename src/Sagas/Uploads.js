import { delay } from 'redux-saga'
import { put } from 'redux-saga/effects';
import UploadsActions from '../Redux/Uploads';
// import Api from '../Services/Api';

let id = 1;
function * upload({ identifier, file }) {
  // mock
  yield delay(1000);
  yield put(UploadsActions.uploadSuccess(identifier, {
    id: id++,
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
