import { put, select, call } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import Strings from 'Services/Strings';
import Api from 'Services/Api';
import InvoiceActions from '../Redux/Invoice';
import SnackbarActions from '../Redux/Snackbar';

function * submit() {
  const invoiceState = yield select(state => state.invoice);
  const { invoice, additionalFilesIds, additionalFilesById } = invoiceState;
  const data = {
    invoice,
    additionalFiles: additionalFilesIds.map(id => additionalFilesById[id]),
  };

  const res = yield call(Api.invoice.submit, data);

  if (res.ok) {
    yield put(InvoiceActions.submitSuccess());
    yield put(SnackbarActions.open(Strings.invoiceSentSuccessfully, 'success'));
    yield put(push('/'));
  } else {
    yield put(InvoiceActions.uploadError(res.error));
  }
}

export default {
  submit,
};
