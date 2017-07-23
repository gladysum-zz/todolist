import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import About from './About';

describe('About', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<About/>, div);
    });

    it('renders the correct text', () => {
      const about = shallow(<About/>);
      expect(about.text()).toEqual('This is the About Page.');
    })

});