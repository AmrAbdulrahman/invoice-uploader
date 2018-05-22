import React from 'react';
import { shallow, mount } from 'enzyme';
import FileUploader from '.';
import { store } from 'App';

describe('<FileUploader>', () => {
  it('renders without crashing', () => {
    shallow(<FileUploader store={store} identifier={'file'} />);
  });
});
