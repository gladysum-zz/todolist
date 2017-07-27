import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

describe('App', () => {

	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(
			<Provider store={store}>
				<App/>
			</Provider>	 
		,div);
	});

});