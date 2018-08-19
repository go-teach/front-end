import {
	LOGIN,
	LOGOUT,
} from '../actions/Auth';
import authReducer from './AuthReducer';

const initialAuthState = { isLoggedIn: false };

describe('authReducer reducers', () => {
	it('should return initial state', () => {
		expect(authReducer(undefined, {})).toEqual(initialAuthState);
	});

	it('should change auth to true', () => {
		expect(
			authReducer(undefined, { type: LOGIN }),
		).toEqual({
			isLoggedIn: true,
		});
	});

	it('should change auth to false', () => {
		expect(
			authReducer({ isLoggedIn: true }, { type: LOGOUT }),
		).toEqual({
			isLoggedIn: false,
		});
	});
});
