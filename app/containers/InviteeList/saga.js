import { put, takeLatest } from 'redux-saga/effects';
import { GET_INVITEES } from './constants';
import { inviteesReceived, getInviteesError } from './actions';

// Individual exports for testing
export function* getListData() {
  try {
    const data = yield fetch('/api/invitees').then(response => response.json());
    yield put(inviteesReceived(data));
  } catch (err) {
    yield put(getInviteesError(err));
  }
}

export default function* watchGetList() {
  yield takeLatest(GET_INVITEES, getListData);
}
