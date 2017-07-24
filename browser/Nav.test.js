import Nav from './Nav';
import React from 'react';
import { mount, shallow } from 'enzyme';

describe('Nav component', () => {

	it('displays the correct text', () => {
		const wrapper = shallow(<Nav />);
		const p = wrapper.find('#home-link');
		expect(p.text()).toBe('To Do List');
	});

	it('Nav menu has exactly 2 items', () => {
		const wrapper = shallow(<Nav />);
		const p = wrapper.find('.dropdown-content');
		expect(p.children()).toHaveLength(2);
	});

	it('Nav menu first item is a Link', () => {
		const wrapper = shallow(<Nav />);
		const p = wrapper.find('.dropdown-content');
		expect(p.childAt(0).text()).toEqual('<Link />');
	});

	it('Nav menu second item is a Link', () => {
		const wrapper = shallow(<Nav />);
		const p = wrapper.find('.dropdown-content');
		expect(p.childAt(1).text()).toEqual('<Link />');
	});

	it('Nav menu first item displays text HOME', () => {
		const wrapper = shallow(<Nav />);
		const p = wrapper.find('.dropdown-content');
		expect(p.childAt(0).childAt(0).text()).toEqual('HOME');
	});

	it('Nav menu second item displays text ABOUT', () => {
		const wrapper = shallow(<Nav />);
		const p = wrapper.find('.dropdown-content');
		expect(p.childAt(1).childAt(0).text()).toEqual('ABOUT');
	});

})
