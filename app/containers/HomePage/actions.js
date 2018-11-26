/*
 *
 * HomePage actions
 *
 */

import { GET_NAME } from './constants';

const getName = name => ({
  type: GET_NAME,
  payload: {
    name,
  },
});
export { getName };
