import React from 'react';
import { shallow, mount } from 'enzyme';
import Modal from '.';

describe('<Modal>', () => {
  it('renders without crashing', () => {
    shallow(<Modal />);
  });
});
