import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Picker, StyleSheet, Text, View } from 'react-native';

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
		let { role, submitRole } = this.state;

		if (!submitRole) {
			return (
				<View style={styles.container} >
					<Text style={styles.header}>
						Select Role:
					</Text>
					<Picker
					  selectedValue={this.state.role}
					  style={styles.picker}
					  onValueChange={(itemValue, itemIndex) => this.setState({role: itemValue})}>
					  <Picker.Item la  bel="Student" value="student" />
					  <Picker.Item label="Teacher" value="teacher" />
					</Picker>
					<Button
			      onPress={() => console.log('login')}
			      title="Log in"
			    />
				</View>
			)
		}

		return <Text> Yes role </Text>
	}
}

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
	}
})

export default RegisterScreen;