import { fromJS } from 'immutable';

import {
  ADD_INVITEE,
  ADD_INVITEE_SUCCESS,
  ADD_INVITEE_FAILURE,
} from './constants';

const initialState = fromJS({
  loading: false,
  saving: false,
  error: false,
  count: 0,
  data: [],
});

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INVITEE:
      return state.set('saving', true).set('error', false);
    case ADD_INVITEE_SUCCESS:
      return state.set('saving', false).set('error', false);
    case ADD_INVITEE_FAILURE:
      return state.set('saving', false).set('error', action.payload.error);
    default:
      return state;
  }
};

export default appReducer;
