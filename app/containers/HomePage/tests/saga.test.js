/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { put, takeEvery } from 'redux-saga/effects';
import { ADD_INVITEE } from 'containers/App/constants';
import { nameSaved, saveNameError } from 'containers/App/actions';
import watchAddInvitee, { addName } from '../saga';

// const generator = homePageSaga();

const name = 'test name';
describe('addName Saga', () => {
  let addNameGenerator;

  beforeEach(() => {
    addNameGenerator = addName();
    const selectDescriptor = addNameGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = addNameGenerator.next(name).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the nameSaved action if the request is successful', () => {
    const response = name;
    const putDescriptor = addNameGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(nameSaved(response)));
  });

  it('should call the saveNameError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = addNameGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(saveNameError(response)));
  });
});

describe('addNameSaga Saga', () => {
  const watchAddInviteeSaga = watchAddInvitee();

  it('should start task to watch for ADD_INVITEE action', () => {
    const takeEveryDescriptor = watchAddInviteeSaga.next().value;
    expect(takeEveryDescriptor).toEqual(takeEvery(ADD_INVITEE, addName));
  });

  // it('Expect to have unit tests specified', () => {
  //   expect(true).toEqual(false);
  // });
});
