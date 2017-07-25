import Home from './Home';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux'
import store from './store';

describe('Home Component', () => {

  it('Error message when user tries to submit empty task', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    const p = wrapper.find('#button');
    p.simulate('click');
    expect(wrapper.find('.input-error').text()).toBe('Please enter a task.');
  });

  it('User can enter text into input field', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    const p = wrapper.find('.input-field');
    p.simulate('change', {target: {value: 'Wash Dishes'}});
    expect(p.text()).toBe('Wash Dishes');
  });

  it('When user enters text into input field and hits Submit, the input field becomes empty', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    const p = wrapper.find('.input-field');
    p.simulate('change', {target: {value: 'Wash Dishes'}});
    const q = wrapper.find('#button');
    q.simulate('click');
    expect(p.text()).toBe('');
  });

  it('When user enters text into input field and hits Submit, no error message is shown', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    const p = wrapper.find('.input-field');
    p.simulate('change', {target: {value: 'Wash Dishes'}});
    const q = wrapper.find('#button');
    q.simulate('click');
    const errorMessage = wrapper.find('.input-error');
    expect(errorMessage.text()).toBe('');
  });

});

