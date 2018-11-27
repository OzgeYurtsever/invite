import React from 'react';
import { shallow } from 'enzyme';
// import { enzymeFind } from 'styled-components/test-utils';

import { HomePage } from '../index';

describe('<HomePage />', () => {
  // it('Expect to have unit tests specified', () => {
  //   expect(true).toEqual(false);
  // });
  let home;
  const mockAddNamefn = jest.fn();
  beforeEach(() => {
    home = shallow(
      <HomePage name="" getName={() => {}} onInvite={mockAddNamefn} />,
    );
  });

  it('should render with an empty name field', () => {
    expect(home.find('#name-field').text()).toEqual('');
  });

  it('should render with a button to submit', () => {
    expect(home.find('.invite-button').length).toBe(1);
  });

  describe('When the form is submitted', () => {
    it('should call the mock addName function', () => {
      home.find('#name-field').simulate('change', {
        target: { name: 'name', value: 'testing name' },
      });
      home.find('#addNameForm').simulate('submit', { preventDefault() {} });
      console.log('mock', mockAddNamefn);
      expect(mockAddNamefn.mock.calls.length).toBe(1);
      mockAddNamefn.mockRestore();
    });
  });
});
