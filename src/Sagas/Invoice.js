import { delay } from 'redux-saga'
import { put, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import InvoiceActions from '../Redux/Invoice';
import SnackbarActions from '../Redux/Snackbar';
import Strings from '../Services/Strings';
// import Api from '../Services/Api';

function * submit() {
  const invoiceState = yield select(state => state.invoice);
  const { invoice, additionalFilesIds, additionalFilesById } = invoiceState;
  const data = {
    invoice,
    additionalFiles: additionalFilesIds.map(id => additionalFilesById[id]),
  };

  yield delay(1000);
  yield put(InvoiceActions.submitSuccess());
  yield put(SnackbarActions.open(Strings.invoiceSentSuccessfully, 'success'));
  yield put(push('/'));


  // if (res.ok) {
  // } else {
  //   yield put(EventsActions.uploadError(res.error));
  // }
}

export default {
  submit,
};
