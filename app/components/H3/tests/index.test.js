import React from 'react';
import { mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';

import H3 from '../index';

describe('<H3 />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const wrapper = mount(<H3 id={id} />);
    const renderedComponent = enzymeFind(wrapper, H3);
    expect(renderedComponent.prop('id')).toEqual(id);
  });
});
