import { fromJS } from 'immutable';
import {
  GET_INVITEES,
  GET_INVITEES_SUCCESS,
  GET_INVITEES_FAILURE,
} from './constants';

export const initialState = fromJS({
  loading: false,
  error: false,
  data: [],
});

function inviteeListReducer(state = initialState, action) {
  switch (action.type) {
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
}

export default inviteeListReducer;
