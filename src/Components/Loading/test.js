import React from 'react';
import { shallow, mount } from 'enzyme';
import Loading from '.';

describe('<Loading>', () => {
  it('renders without crashing', () => {
    shallow(<Loading />);
  });
});
