import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
	Button,
	StyleSheet,
	Text,
	View,
	TextInput,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { loggingIn } from '../actions/Auth';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	inputBox: {
		height: 35,
		width: 200,
		backgroundColor: 'white',
		borderColor: 'black',
		borderWidth: 1,
		margin: 10,
		padding: 3,
	},
});

class MainScreen extends Component {
	static propTypes = {
		navToRegister: PropTypes.func.isRequired,
		navToProfile: PropTypes.func.isRequired,
	}

	static navigationOptions = {
		title: 'Log In',
	}

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
		};

		this.handleLogIn = this.handleLogIn.bind(this);
	}

	handleLogIn() {
		const { navToProfile, loggingIn } = this.props;
		loggingIn();
		navToProfile();
	}

	render() {
		const { navToRegister, navToProfile } = this.props;

		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>Go-Teach </Text>
				<TextInput
					underlineColorAndroid="transparent"
					style={styles.inputBox}
					onChangeText={text => this.setState({ username: text })}
					placeholder="Username"
				/>
				<TextInput
					underlineColorAndroid="transparent"
					secureTextEntry
					style={styles.inputBox}
					onChangeText={text => this.setState({ password: text })}
					placeholder="Password"
				/>
				<View style={{ flexDirection: 'row' }}>
					<Button
						onPress={this.handleLogIn}
						title="Log in"
					/>
					<Text> or </Text>
					<Text style={{ color: 'blue' }} onPress={navToRegister}> Sign Up </Text>
				</View>
			</View>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	navToRegister: () => dispatch(NavigationActions.navigate({ routeName: 'Register' })),
	navToProfile: () => dispatch(NavigationActions.navigate({ routeName: 'Profile' })),
	loggingIn: () => dispatch(loggingIn()),
});

export { MainScreen }; //for testing
export default connect(undefined, mapDispatchToProps)(MainScreen);
