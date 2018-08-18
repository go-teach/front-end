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
		borderColor: 'gray',
		borderWidth: 1,
		margin: 10,
		padding: 3,
	},
});

class MainScreen extends Component {
	static propTypes = {
		navToRegister: PropTypes.func.isRequired,
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
	}

	render() {
		const { navToRegister } = this.props;

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
						onPress={() => console.log('login')}
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
});

export default connect(undefined, mapDispatchToProps)(MainScreen);
