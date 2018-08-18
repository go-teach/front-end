import { NavigationActions } from 'react-navigation';

import { RootNavigator } from '../navigators/AppNavigator';

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = RootNavigator.router.getActionForPathAndParams('Main');
const initialNavState = RootNavigator.router.getStateForAction(firstAction);

const nav = (state = initialNavState, action) => {
	let nextState;
	switch (action.type) {
	case 'Login':
		nextState = RootNavigator.router.getStateForAction(
			NavigationActions.navigate({ routeName: 'Logout' }),
			state,
		);
		break;
	case 'Logout':
		nextState = RootNavigator.router.getStateForAction(
			NavigationActions.navigate({ routeName: 'Login' }),
			state,
		);
		break;
	default:
		nextState = RootNavigator.router.getStateForAction(action, state);
		break;
	}

	// Simply return the original `state` if `nextState` is null or undefined.
	return nextState || state;
};

export default nav;
