// import { defaultAction } from '../actions';
// import { DEFAULT_ACTION } from '../constants';
import { getName } from '../actions';
import { GET_NAME } from '../constants';

describe('HomePage actions', () => {
  describe('Default Action', () => {
    it('has a type of GET_NAME', () => {
      const testData = 'test person';
      const expected = {
        type: GET_NAME,
        payload: {
          name: testData,
        },
      };
      expect(getName(testData)).toEqual(expected);
    });
  });
});
