/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const GET_INVITEES = 'invite/App/GET_INVITEES';
export const GET_INVITEES_SUCCESS = 'invite/App/GET_INVITEES_SUCCESS';
export const GET_INVITEES_FAILURE = 'invite/App/GET_INVITEES_FAILURE';

export const ADD_INVITEE = 'invite/App/ADD_INVITEE';
export const ADD_INVITEE_SUCCESS = 'invite/App/ADD_INVITEE_SUCCESS';
export const ADD_INVITEE_FAILURE = 'invite/App/ADD_INVITEE_FAILURE';

export const GET_COUNT = 'invite/App/GET_COUNT';
export const GET_COUNT_SUCCESS = 'invite/App/GET_COUNT_SUCCESS';
export const GET_COUNT_FAILURE = 'invite/App/GET_COUNT_FAILURE';
