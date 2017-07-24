import Home from './Home';
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux'
import store from './store';

describe('Home Component', () => {

  it('Validation error when user tries to submit empty task', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    const p = wrapper.find('#button-container');
    expect(p.contains(<input type="submit" value="Submit" id="button" />)).toBe(true);
    // submitButton.simulate('click');
    // const validation = wrapper.find('.input-error');
    // expect(validation.text()).toBe('Please enter a task.');



  });

});

