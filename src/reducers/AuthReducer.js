import { LOGIN, LOGOUT } from '../actions/Auth';

const initialAuthState = { isLoggedIn: false };

const auth = (state = initialAuthState, action) => {
	switch (action.type) {
	case LOGIN:
		return { ...state, isLoggedIn: true };
	case LOGOUT:
		return { ...state, isLoggedIn: false };
	default:
		return state;
	}
};

export default auth;
