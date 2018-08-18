import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import {
	reduxifyNavigator,
	createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import MainScreen from '../components/MainScreen';
import ProfileScreen from '../components/ProfileScreen';
import RegisterScreen from '../components/RegisterScreen';

const middleware = createReactNavigationReduxMiddleware(
	'root',
	state => state.nav
);

const RootNavigator = createStackNavigator({
	Main: { screen: MainScreen },
	Profile: { screen: ProfileScreen },
	Register: { screen: RegisterScreen },
});

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
	state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, middleware };