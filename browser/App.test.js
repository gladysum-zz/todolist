import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

function createFakeStore (state) {
	return {
		dispatch: () => {},
		subscribe: () => {},
		getState: () => {
			return Object.assign({}, state);
		}
	}
}

function setup (props={}, state={}) {
	const fakeStore = createFakeStore(state);

	return mount(<App {...props} store={fakeStore} />);
}

describe('App', () => {

	it('renders without crashing', () => {
		const fakeProps = {};
		const wrapper = setup(fakeProps, {});

		expect(wrapper.find(App).props('tasks')).toHaveLength(1);



		// const div = document.createElement('div');
		// ReactDOM.render(
		// 	<Provider store={store}>
		// 		<App/>
		// 	</Provider>	 
		// ,div);
	});

});