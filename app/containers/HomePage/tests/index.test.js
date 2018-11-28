import React from 'react';
import { shallow } from 'enzyme';
import { getName } from '../actions';
import { saveName } from '../../App/actions';

// import { enzymeFind } from 'styled-components/test-utils';

import { HomePage, mapDispatchToProps } from '../index';

describe('<HomePage />', () => {
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
      expect(mockAddNamefn.mock.calls.length).toBe(1);
      mockAddNamefn.mockRestore();
    });
  });

  describe('mapDispatchToProps', () => {
    describe('getName', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.getName).toBeDefined();
      });

      it('should dispatch getName when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const name = 'test name';
        result.getName({ target: { value: name } });
        expect(dispatch).toHaveBeenCalledWith(getName(name));
      });
    });

    describe('onInvite', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onInvite).toBeDefined();
      });

      it('should dispatch saveName when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onInvite();
        expect(dispatch).toHaveBeenCalledWith(saveName());
      });

      it('should preventDefault if called with event', () => {
        const preventDefault = jest.fn();
        const result = mapDispatchToProps(() => {});
        const e = { preventDefault };
        result.onInvite(e);
        expect(preventDefault).toHaveBeenCalledWith();
      });
    });
  });
});
