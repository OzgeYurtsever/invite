import { fromJS } from 'immutable';

import {
  ADD_INVITEE,
  ADD_INVITEE_SUCCESS,
  ADD_INVITEE_FAILURE,
  GET_COUNT,
  GET_COUNT_SUCCESS,
  GET_COUNT_FAILURE,
  GET_INVITEES,
  GET_INVITEES_SUCCESS,
  GET_INVITEES_FAILURE,
} from './constants';

// The initial state of the App
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
    case GET_COUNT:
      return state.set('loading', true).set('error', false);
    case GET_COUNT_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('count', action.payload.success);
    case GET_COUNT_FAILURE:
      return state.set('loading', false).set('error', action.payload.error);
    case GET_INVITEES:
      return state.set('loading', true).set('error', false);
    case GET_INVITEES_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('data', action.payload.data);
    case GET_INVITEES_FAILURE:
      return state.set('loading', false).set('error', action.payload.error);
    default:
      return state;
  }
};

export default appReducer;
