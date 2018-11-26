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

const getCount = () => ({
  type: GET_COUNT,
});

const countReceived = count => ({
  type: GET_COUNT_SUCCESS,
  payload: { count },
});

const getCountError = error => ({
  type: GET_COUNT_FAILURE,
  payload: {
    error,
  },
});

const getInvitees = () => ({
  type: GET_INVITEES,
});

const inviteesReceived = data => ({
  type: GET_INVITEES_SUCCESS,
  payload: {
    data,
  },
});

const getInviteesError = error => ({
  type: GET_INVITEES_FAILURE,
  payload: {
    error,
  },
});

export {
  saveName,
  saveNameError,
  nameSaved,
  getCount,
  countReceived,
  getCountError,
  getInvitees,
  inviteesReceived,
  getInviteesError,
};
