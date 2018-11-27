import { fromJS } from 'immutable';
import homePageReducer from '../reducer';
import { getName } from '../actions';

describe('homePageReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      name: '',
    });
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(homePageReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the getName action correctly', () => {
    const name = 'test person';
    const expectedResult = state.set('name', name);

    expect(homePageReducer(state, getName(name))).toEqual(expectedResult);
  });
});
