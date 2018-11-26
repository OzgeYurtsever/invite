import { call, put, select, takeEvery } from 'redux-saga/effects';
// import axios from 'axios';

// Individual exports for testing
import { ADD_INVITEE } from 'containers/App/constants';
import { nameSaved, saveNameError } from 'containers/App/actions';
import request from '../../utils/request';
import { makeSelectName } from './selectors';

// const postName = (url, data) => {
//   axios.post(url, data).catch(err => err);
// };

export function* addName() {
  // See example in containers/HomePage/saga.js
  const name = yield select(makeSelectName());
  const postUrl = '/api/invitees';
  const init = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name }),
  };
  try {
    yield call(request, postUrl, init);
    yield put(nameSaved(name));
  } catch (error) {
    yield put(saveNameError(error));
  }
}

export default function* watchAddInvitee() {
  yield takeEvery(ADD_INVITEE, addName);
}
