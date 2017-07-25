import Task from './Task';
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux'
import store from './store';

describe('Task Component', () => {

  it('renders the expected task inside the 3rd child of the Task Component', () => {
    const todo = { task: 'Buy Milk', index: 0 };
    const wrapper = mount(
      <Provider store={store}>
        <Task
          task={todo.task}
          index={todo.index}
        />
      </Provider>
    );
    expect(wrapper.childAt(2).text()).toBe(todo.task);
  });

  it('renders a Delete button for the given task', () => {
    const todo = { task: 'Buy Milk', index: 0 };
    const wrapper = mount(
      <Provider store={store}>
        <Task
          task={todo.task}
          index={todo.index}
        />
      </Provider>
    );
    expect(wrapper.find('.delete-button').type()).toBe('button');
  });

  it('renders an Edit button for the given task', () => {
    const todo = { task: 'Buy Milk', index: 0 };
    const wrapper = mount(
      <Provider store={store}>
        <Task
          task={todo.task}
          index={todo.index}
        />
      </Provider>
    );
    expect(wrapper.find('.edit-button').type()).toBe('button');
  });

  it('Edit button becomes Save button when clicked', () => {
    const todo = { task: 'Buy Milk', index: 0 };
    const wrapper = mount(
      <Provider store={store}>
        <Task
          task={todo.task}
          index={todo.index}
        />
      </Provider>
    );
    const p = wrapper.find('.edit-button');
    p.simulate('click');
    expect(p.text()).toBe('Save');
  });

  it('Save button becomes Edit button when clicked', () => {
    const todo = { task: 'Buy Milk', index: 0 };
    const wrapper = mount(
      <Provider store={store}>
        <Task
          task={todo.task}
          index={todo.index}
        />
      </Provider>
    );
    const p = wrapper.find('.edit-button');
    p.simulate('click');
    const q = wrapper.find('.save-button')
    q.simulate('click');
    expect(q.text()).toBe('Edit');
  });

  it('Clicking Edit button makes task field editable', () => {
    const todo = { task: 'Buy Milk', index: 0 };
    const wrapper = mount(
      <Provider store={store}>
        <Task
          task={todo.task}
          index={todo.index}
        />
      </Provider>
    );
    const p = wrapper.find('.edit-button');
    p.simulate('click');
    expect(wrapper.find('.task-editable').type()).toBe('textarea');
  });

  it('Clicking Edit button sets the "value" prop inside the textarea as the task', () => {
    const todo = { task: 'Buy Milk', index: 0 };
    const wrapper = mount(
      <Provider store={store}>
        <Task
          task={todo.task}
          index={todo.index}
        />
      </Provider>
    );
    const p = wrapper.find('.edit-button');
    p.simulate('click');
    const q = wrapper.find('.task-editable')
    expect(q.props().value).toBe(todo.task);
  });

  it('Clicking Save button makes task field read-only', () => {
    const todo = { task: 'Buy Milk', index: 0 };
    const wrapper = mount(
      <Provider store={store}>
        <Task
          task={todo.task}
          index={todo.index}
        />
      </Provider>
    );
    const p = wrapper.find('.edit-button');
    p.simulate('click');
    const q = wrapper.find('.save-button');
    q.simulate('click');
    expect(wrapper.childAt(2).hasClass('task-read-only')).toBe(true);
  });

});