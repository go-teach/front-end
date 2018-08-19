import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

import LoginStatusMessage from './LoginStatusMessage';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
});

const ProfileScreen = ({ isLoggedIn }) => (
	<View style={styles.container}>
		<Text style={styles.welcome}> Profile Screen </Text>
		<LoginStatusMessage isLoggedIn={isLoggedIn} />
	</View>
);

ProfileScreen.propTypes = {
	isLoggedIn: PropTypes.bool.isRequired,
};

ProfileScreen.navigationOptions = {
	title: 'Profile',
};


const mapStateToProps = state => ({
	isLoggedIn: state.auth.isLoggedIn,
});

export { ProfileScreen }; //for testing
export default connect(mapStateToProps)(ProfileScreen);
