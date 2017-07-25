import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import About from './About';

describe('About', () => {
		let about = shallow(<About/>);

		it('renders without crashing', () => {
				const div = document.createElement('div');
				ReactDOM.render(<About/>, div);
		});

		it('renders the correct text', () => {
			expect(about.text()).toEqual('This is the About Page.');
		});

		it('has expected className', () => {
			expect(about.hasClass('background')).toEqual(true);
		});

		it('has exactly one child' , () => {
			expect(about.children()).toHaveLength(1);
		})

		it('its child has expected className', () => {
			expect((about.childAt(0)).hasClass('organize-container')).toEqual(true);
		});

});