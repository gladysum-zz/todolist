import Task from './Task';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux'
import store from './store';

describe('Task Component', () => {

  it('renders the expected text', () => {
    const todo = { task: 'Buy Milk', index: 0 };
    const wrapper = mount(
      <Provider store={store}>
        <Task
          task={todo.task}
          index={todo.index}
        />
      </Provider>
    );
    const p = wrapper.find('.task-field');
    expect(p.text()).toBe('Buy Milk');
  });

  it('TodoComponent calls doneChange when todo is clicked', () => {
    const todo = { task: 'Buy Milk', index: 0 };
    const wrapper = mount(
      <Provider store={store}>
        <Task
          task={todo.task}
          index={todo.index}
        />
      </Provider>
    );

    const p = wrapper.find('.delete-button');
    p.simulate('click');
    expect(doneChange).toBeCalledWith(1);
  });

});