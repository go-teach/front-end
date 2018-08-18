import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	Picker,
	StyleSheet,
	Text,
	View,
	Button,
} from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	picker: {
		width: 200,
		height: 35,
		backgroundColor: 'white',
		borderWidth: 1,
	},
	header: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
});

class RegisterScreen extends Component {
	static navigationOptions = {
		title: 'Register',
	}

	constructor(props) {
		super(props);

		this.state = {
			role: 'student',
			submitRole: false,
		};
	}

	render() {
		const { role, submitRole } = this.state;

		if (!submitRole) {
			return (
				<View style={styles.container}>
					<Text style={styles.header}>Select Role: </Text>
					<Picker
						selectedValue={role}
						style={styles.picker}
						onValueChange={(itemValue, itemIndex) => this.setState({ role: itemValue })}
					>
						<Picker.Item label="Student" value="student" />
						<Picker.Item label="Teacher" value="teacher" />
					</Picker>
					<Button
						style={{ margin: 10 }}
						onPress={() => this.setState({ submitRole: true })}
						title="Next"
					/>
				</View>
			);
		}

		return <Text> Yes role </Text>;
	}
}

export default RegisterScreen;
