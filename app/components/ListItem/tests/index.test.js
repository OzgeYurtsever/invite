import React from 'react';
import { mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';

import ListItem from '../index';

describe('<ListItem />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const wrapper = mount(<ListItem id={id} />);
    const renderedComponent = enzymeFind(wrapper, ListItem);
    expect(renderedComponent.prop('id')).toEqual(id);
  });
});
