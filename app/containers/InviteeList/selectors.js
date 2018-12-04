import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectInviteeListDomain = state => state.get('inviteeList', initialState);

const makeSelectError = () =>
  createSelector(selectInviteeListDomain, subState => subState.get('error'));

const makeSelectData = () =>
  createSelector(selectInviteeListDomain, subState => subState.get('data'));

export { selectInviteeListDomain, makeSelectData, makeSelectError };
