import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
});

const LoginStatusMessage = ({ isLoggedIn }) => {
	if (!isLoggedIn) {
		return <Text>Please log in</Text>;
	}
	return (
		<View>
			<Text style={styles.welcome}>
				{'You are "logged in" right now'}
			</Text>
		</View>
	);
};

LoginStatusMessage.propTypes = {
	isLoggedIn: PropTypes.bool.isRequired,
};

export default LoginStatusMessage;
