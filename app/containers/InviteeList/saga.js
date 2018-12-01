import { put, takeLatest } from 'redux-saga/effects';
import { GET_INVITEES } from './constants';
import { inviteesReceived, getInviteesError } from './actions';

// Individual exports for testing
export function* getListData() {
  try {
    const response = yield fetch('/api/invitees');
    const result = yield response.json();
    if (response.ok) {
      yield put(inviteesReceived(result));
    } else {
      throw result;
    }
  } catch (err) {
    yield put(getInviteesError(err));
  }
}

export default function* watchGetList() {
  yield takeLatest(GET_INVITEES, getListData);
}
