import { createSelector } from 'reselect';

const selectGlobal = state => state.get('global');

const selectRouter = state => state.get('router');

const makeSelectLoading = () =>
  createSelector(selectGlobal, globalState => globalState.get('loading'));

const makeSelectError = () =>
  createSelector(selectGlobal, globalState => globalState.get('error'));

const makeSelectSaving = () =>
  createSelector(selectGlobal, globalState => globalState.get('saving'));

const makeSelectCount = () =>
  createSelector(selectGlobal, globalState => globalState.get('count'));

const makeSelectData = () =>
  createSelector(selectGlobal, globalState => globalState.get('data'));

const makeSelectLocation = () =>
  createSelector(selectRouter, routerState =>
    routerState.get('location').toJS(),
  );

export {
  makeSelectLocation,
  makeSelectError,
  makeSelectLoading,
  makeSelectSaving,
  makeSelectCount,
  makeSelectData,
};
