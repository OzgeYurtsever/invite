import {
  ADD_INVITEE,
  ADD_INVITEE_SUCCESS,
  ADD_INVITEE_FAILURE,
  APP_FAILURE,
} from './constants';

const saveName = () => ({
  type: ADD_INVITEE,
});

const nameSaved = name => ({
  type: ADD_INVITEE_SUCCESS,
  payload: {
    name,
  },
});

const saveNameError = error => ({
  type: ADD_INVITEE_FAILURE,
  payload: {
    error,
  },
});

const appError = error => ({
  type: APP_FAILURE,
  payload: {
    error,
  },
});

export { saveName, saveNameError, nameSaved, appError };
