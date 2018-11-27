/*
 *
 * InviteeList actions
 *
 */

import {
  GET_INVITEES,
  GET_INVITEES_SUCCESS,
  GET_INVITEES_FAILURE,
} from './constants';

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

export { getInvitees, inviteesReceived, getInviteesError };
