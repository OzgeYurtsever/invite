import { fromJS } from 'immutable';
import inviteeListReducer from '../reducer';

describe('inviteeListReducer', () => {
  it('returns the initial state', () => {
    expect(inviteeListReducer(undefined, {})).toEqual(fromJS({}));
  });
});
