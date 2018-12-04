import { fromJS } from 'immutable';
import { GET_NAME } from './constants';

export const initialState = fromJS({
  name: '',
});

const homePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NAME:
      return state.set('name', action.payload.name);
    default:
      return state;
  }
};

export default homePageReducer;
