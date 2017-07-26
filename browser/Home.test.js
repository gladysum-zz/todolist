import Home from './Home';
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux'
import store from './store';

describe('Home Component', () => {

  const wrapper = mount(
    <Provider store={store}>
      <Home />
    </Provider>
  );

  const submitButton = wrapper.find('#button');
  const inputField = wrapper.find('.input-field');

  it('Error message is shown when user tries to submit empty task', () => {
    submitButton.simulate('click');
    expect(wrapper.find('.input-error').text()).toBe('Please enter a task.');
  });

  it('User can enter text into input field', () => {
    inputField.simulate('change', {target: {value: 'Wash Dishes'}});
    expect(inputField.text()).toBe('Wash Dishes');
  });

  it('When user enters text into input field and hits Submit, no error message is shown', () => {
    inputField.simulate('change', {target: {value: 'Wash Dishes'}});
    submitButton.simulate('click');
    expect(wrapper.find('.input-error').text()).toBe('');
  });

  it('Has h1 header with "Add a task" ', () => {
    expect(wrapper.find('h1').at(0).text()).toBe('Add a task');
  });

  it('Has h1 header with "My Tasks" ', () => {
    expect(wrapper.find('h1').at(1).text()).toBe('My Tasks');
  });

});

