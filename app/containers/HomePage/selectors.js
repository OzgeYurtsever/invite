import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHomePageDomain = state => state.get('homePage', initialState);

const makeSelectName = () =>
  createSelector(selectHomePageDomain, homeState => homeState.get('name'));

export { selectHomePageDomain, makeSelectName };
