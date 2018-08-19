export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const loggingIn = () => ({
	type: LOGIN,
});

export const loggingOut = () => ({
	type: LOGOUT,
});
