import React from 'react';
import { shallow } from 'enzyme';
import InvoiceUploader from '.';
import { store } from 'App';

describe('<InvoiceUploader>', () => {
  it('renders without crashing', () => {
    shallow(<InvoiceUploader store={store} />);
  });
});
