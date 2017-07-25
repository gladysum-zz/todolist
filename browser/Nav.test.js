import Nav from './Nav';
import React from 'react';
import { mount, shallow } from 'enzyme';

describe('Nav component', () => {

	const wrapper = shallow(<Nav />);
	const header = wrapper.find('#home-link');
	const navMenu = wrapper.find('.dropdown-content');

	it('Nav displays the correct text', () => {		
		expect(header.text()).toBe('To Do List');
	});

	it('Nav menu has exactly 2 items', () => {
		expect(navMenu.children()).toHaveLength(2);
	});

	it('Nav menu first item is a Link', () => {
		expect(navMenu.childAt(0).text()).toEqual('<Link />');
	});

	it('Nav menu second item is a Link', () => {
		expect(navMenu.childAt(1).text()).toEqual('<Link />');
	});

	it('Nav menu first item displays text HOME', () => {
		expect(navMenu.childAt(0).childAt(0).text()).toEqual('HOME');
	});

	it('Nav menu second item displays text ABOUT', () => {
		expect(navMenu.childAt(1).childAt(0).text()).toEqual('ABOUT');
	});

})
