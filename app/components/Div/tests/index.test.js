import React from 'react';
import { mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';

import Div from '../index';

describe('<Div />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const wrapper = mount(<Div id={id} />);
    const renderedComponent = enzymeFind(wrapper, Div);
    expect(renderedComponent.prop('id')).toEqual(id);
  });
});
