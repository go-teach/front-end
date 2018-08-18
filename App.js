import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import AppReducer from './src/reducers';
import { AppNavigator, middleware } from './src/navigators/AppNavigator';

const store = createStore(AppReducer, applyMiddleware(middleware));

const ReduxExampleApp = () => (
	<Provider store={store}>
		<AppNavigator />
	</Provider>
);

AppRegistry.registerComponent('ReduxExample', () => ReduxExampleApp);

export default ReduxExampleApp;
