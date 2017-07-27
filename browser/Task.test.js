import Task from './Task';
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from './store';
import sinon from 'sinon';

describe('Task Component', () => {
  
  const task = {
    id: 0, 
    content: 'Make cheese'
  };

  it('renders the expected task inside the 3rd child of the Task Component', () => {     
    const wrapper = mount(
      <Provider store={store}>
        <Task
          task={task}
          key={task.id}
        />
      </Provider>
    );
    expect(wrapper.childAt(2).text()).toBe(task.content);
  });

  it('renders a Delete button for the given task', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Task
          task={task}
          key={task.id}
        />
      </Provider>
    );
    const editButton = wrapper.find('.edit-button');
    expect(wrapper.find('.delete-button').type()).toBe('button');
  });

  it('renders an Edit button for the given task', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Task
          task={task}
          key={task.id}
        />
      </Provider>
    );
    const editButton = wrapper.find('.edit-button');
    expect(wrapper.find('.edit-button').type()).toBe('button');
  });

  it('Edit button becomes Save button when clicked', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Task
          task={task}
          key={task.id}
        />
      </Provider>
    );
    const editButton = wrapper.find('.edit-button');
    editButton.simulate('click');
    expect(editButton.text()).toBe('Save');
  });

  it('Save button becomes Edit button when clicked', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Task
          task={task}
          key={task.id}
        />
      </Provider>
    );
    const editButton = wrapper.find('.edit-button');
    editButton.simulate('click');
    const saveButton = wrapper.find('.save-button')
    saveButton.simulate('click');
    expect(saveButton.text()).toBe('Edit');
  });

  it('Clicking Edit button makes task field editable', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Task
          task={task}
          key={task.id}
        />
      </Provider>
    );
    const editButton = wrapper.find('.edit-button');
    editButton.simulate('click');
    expect(wrapper.find('.task-editable').type()).toBe('textarea');
  });

  it('Clicking Edit button sets the "value" prop inside the textarea as the task', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Task
          task={task}
          key={task.id}
        />
      </Provider>
    );
    const editButton = wrapper.find('.edit-button');
    editButton.simulate('click');
    const inputField = wrapper.find('.task-editable')
    expect(inputField.props().value).toBe(task.content);
  });

  it('User can edit a task after hitting the Edit button', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Task
          task={task}
          key={task.id}
        />
      </Provider>
    );
    const editButton = wrapper.find('.edit-button');
    editButton.simulate('click');
    const inputField = wrapper.find('.task-editable')
    inputField.simulate('change', {target: {value: 'Wash Dishes'}});
    expect(wrapper.find('.task-editable').text()).toBe('Wash Dishes');
  });

  it('Clicking Save button makes task field read-only', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Task
          task={task}
          key={task.id}
        />
      </Provider>
    );
    const editButton = wrapper.find('.edit-button');
    editButton.simulate('click');
    const saveButton = wrapper.find('.save-button');
    saveButton.simulate('click');
    expect(wrapper.childAt(2).hasClass('task-read-only')).toBe(true);
  });

  it('Show validation error if user attempts to save an empty task', () => {
    const emptyTask = {
      id: 0,
      content: ''
    };
    const wrapper = mount(
      <Provider store={store}>
        <Task
          task={emptyTask}
          key={task.id}
        />
      </Provider>
    );
    const editButton = wrapper.find('.edit-button');
    editButton.simulate('click');
    const saveButton = wrapper.find('.save-button');
    saveButton.simulate('click');
    expect(wrapper.find('.input-error').text()).toBe('Cannot save an empty task.');
  });

  it('Do not show validation error if new task is the same as prior task', () => {    
    const wrapper = mount(
      <Provider store={store}>
        <Task
          task={task}
          key={task.id}
        />
      </Provider>
    );
    const editButton = wrapper.find('.edit-button');
    editButton.simulate('click');
    const saveButton = wrapper.find('.save-button');
    saveButton.simulate('click');
    expect(wrapper.find('.input-error').text()).toBe('');
  });

});