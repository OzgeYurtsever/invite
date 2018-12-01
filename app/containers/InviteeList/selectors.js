import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the inviteeList state domain
 */

const selectInviteeListDomain = state => state.get('inviteeList', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by InviteeList
 */

const makeSelectError = () =>
  createSelector(selectInviteeListDomain, subState => subState.get('error'));

const makeSelectData = () =>
  createSelector(selectInviteeListDomain, subState => subState.get('data'));

// const makeSelectInviteeList = () =>
//   createSelector(selectInviteeListDomain, substate => substate.toJS());

// export default makeSelectInviteeList;
export { selectInviteeListDomain, makeSelectData, makeSelectError };
