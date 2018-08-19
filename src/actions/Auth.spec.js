import {
	LOGIN,
	LOGOUT,
	loggingIn,
	loggingOut,
} from './Auth';

describe('Auth action', () => {
	it('should invoke isloggedin state', () => {
		const expectedAction = {
			type: LOGIN,
		};
		expect(loggingIn()).toEqual(expectedAction);
	});
});
