// import { defaultAction } from '../actions';
// import { DEFAULT_ACTION } from '../constants';
import { getName } from '../actions';
import { GET_NAME } from '../constants';

describe('HomePage actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: GET_NAME,
      };
      expect(getName()).toEqual(expected);
    });
  });
});
