import React from 'react';
import { shallow, mount } from 'enzyme';
import LoadingIcon from '.';

describe('<LoadingIcon>', () => {
  it('renders without crashing', () => {
    shallow(<LoadingIcon />);
  });
});
