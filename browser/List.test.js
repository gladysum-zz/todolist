import List from './List';
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux'
import store from './store';

describe('List Component', () => {

  it('shows "No task added." by default', () => {
  	const wrapper = mount(
  	  <Provider store={store}>
  	    <List />
  	  </Provider>
  	);
  	expect(wrapper.text()).toBe('No tasks added.');
  });

})