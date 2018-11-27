import { fromJS } from 'immutable';
import { selectHomePageDomain, makeSelectName } from '../selectors';

describe('selectHomePageDomain', () => {
  // it('Expect to have unit tests specified', () => {
  //   expect(true).toEqual(false);
  // });
  it('should select the home state', () => {
    const homeState = fromJS({
      data: {},
    });
    const mockedState = fromJS({
      homePage: homeState,
    });
    expect(selectHomePageDomain(mockedState)).toEqual(homeState);
  });
});

describe('makeSelectName', () => {
  const nameSelector = makeSelectName();
  it('should select the username', () => {
    const name = 'new person';
    const mockedState = fromJS({
      homePage: {
        name,
      },
    });
    expect(nameSelector(mockedState)).toEqual(name);
  });
});
