import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	Picker,
	StyleSheet,
	Text,
	View,
	Button,
	TouchableHighlight,
	TextInput,
	KeyboardAvoidingView,
	ScrollView,
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
		borderColor: 'black',
		margin: 10,
	},
	header: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	inputBox: {
		height: 35,
		width: 200,
		borderColor: 'black',
		borderWidth: 1,
		margin: 10,
		padding: 3,
		backgroundColor: '#ffffff',
	},
	touchableText: {
		color: 'white',
		fontWeight: 'bold',
	},
	touchableContainer: {
		width: 60,
		alignItems: 'center',
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
			fullName: '',
			username: '',
			password: '',
			address: '',
			schoolLevel: 'SMA',
			phoneNumber: '',
			subject: 'matematika',
			description: '',
		};
	}

	// renderForTeacher() {
	// 	return (

	// 	)
	// }

	renderForStudent(schoolLevel) {
		return (
			<Picker
				selectedValue={schoolLevel}
				style={styles.picker}
				onValueChange={(itemValue, itemIndex) => this.setState({ schoolLevel: itemValue })}
			>
				<Picker.Item label="SMA" value="SMA" />
				<Picker.Item label="SMP" value="SMP" />
				<Picker.Item label="SD" value="SD" />
			</Picker>
		);
	}

	renderForTeacher(subject) {
		return (
			<View>
				<Picker
					selectedValue={subject}
					style={styles.picker}
					onValueChange={(itemValue, itemIndex) => this.setState({ subject: itemValue })}
				>
					<Picker.Item label="Matematika" value="matematika" />
					<Picker.Item label="Fisika" value="fisika" />
					<Picker.Item label="Kimia" value="kimia" />
					<Picker.Item label="Sejarah" value="sejarah" />
					<Picker.Item label="Geografi" value="geografi" />
					<Picker.Item label="Ekonomi" value="ekonomi" />
					<Picker.Item label="Akuntansi" value="akuntansi" />
					<Picker.Item label="Inggris" value="inggris" />
				</Picker>
				<TextInput
					style={{ borderWidth: 1, borderColor: 'black', backgroundColor: 'white', padding: 10 }}
					editable
					multiline
					placeholder="About me"
					numberOfLines={4}
					onChangeText={description => this.setState({ description })}
					maxLength={40}
				/>
			</View>
		)
	}

	render() {
		const { role, submitRole, schoolLevel, subject } = this.state;

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

		return (
			<KeyboardAvoidingView style={styles.container} keyboardVerticalOffset={100} behavior="padding" enabled>
				<TextInput
					underlineColorAndroid="transparent"
					style={styles.inputBox}
					onChangeText={text => this.setState({ fullName: text })}
					placeholder="Full Name"
				/>
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
				<TextInput
					underlineColorAndroid="transparent"
					style={styles.inputBox}
					onChangeText={text => this.setState({ address: text })}
					placeholder="Address"
				/>
				<TextInput
					underlineColorAndroid="transparent"
					keyboardType="number-pad"
					style={styles.inputBox}
					onChangeText={text => this.setState({ phoneNumber: text })}
					placeholder="PhoneNumber"
				/>
				{ role === 'student' && this.renderForStudent(schoolLevel) }
				{ role === 'teacher' && this.renderForTeacher(subject) }
				<View style={{ flexDirection: 'row' }}>
					<TouchableHighlight
						onPress={() => this.setState({ submitRole: false })}
						style={{ backgroundColor: 'red', padding: 7 }}
					>
						<View style={styles.touchableContainer}>
							<Text style={styles.touchableText}>Back</Text>
						</View>
					</TouchableHighlight>
					<TouchableHighlight
						onPress={() => console.log('back')}
						style={{ marginLeft: 10, backgroundColor: '#4996ff', padding: 7 }}
					>
						<View style={styles.touchableContainer}>
							<Text style={styles.touchableText}>Submit</Text>
						</View>
					</TouchableHighlight>
				</View>
			</KeyboardAvoidingView>
		);
	}
}

export default RegisterScreen;
