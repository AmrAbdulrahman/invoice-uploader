import { all, takeEvery, takeLatest } from 'redux-saga/effects';

import { UploadsTypes } from '../Redux/Uploads';
import { InvoiceTypes } from '../Redux/Invoice';

import uploadsSagas from './Uploads';
import invoiceSagas from './Invoice';

export default function * root() {
  yield all([
    // Uploads
    takeEvery(UploadsTypes.UPLOAD, uploadsSagas.upload),
    takeEvery(UploadsTypes.REMOVE, uploadsSagas.remove),

    // Invoice
    takeLatest(InvoiceTypes.SUBMIT, invoiceSagas.submit),
  ]);
}
