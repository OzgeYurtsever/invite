import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the homePage state domain
 */

const selectHomePageDomain = state => state.get('homePage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by HomePage
 */

const makeSelectName = () =>
  createSelector(selectHomePageDomain, homeState => homeState.get('name'));

export { selectHomePageDomain, makeSelectName };
