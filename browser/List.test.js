import React from 'react';
import { shallow } from 'enzyme';
import {List} from './List';

describe('List Component', () => {

  it('shows "No task added." when props.tasks is an empty array', () => {
  	const props = {
  		tasks: []
  	};
  	const wrapper = shallow(<List {...props} />);
  	expect(wrapper.text()).toBe('No tasks added.');
  });

  it('it renders the same number of tasks as the length of props.tasks', () => {
  	const props = {
  		tasks: 
        [
          {id: 0, content: 'Milk the cows'},
          {id: 1, content: 'Fleece the sheep'},
          {id: 2, content: 'Feed the peacocks'}
        ]
  	};
  	const wrapper = shallow(<List {...props} />);
  	expect(wrapper.children()).toHaveLength(3);
  });

});