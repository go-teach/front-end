import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

class LoginScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: 'Username',
			password: 'Password',
		}
	}

	static propTypes = {
		navigation: PropTypes.object.isRequired,
	}

	static navigationOptions = {
		title: 'Log In',
	}

	render() {
		return (
			<View style={styles.container}>
		    <Text style={styles.welcome}>
		      Go-Teach
		    </Text>
		    <TextInput 
		    	underlineColorAndroid='transparent'
		    	style={styles.inputBox}
		    	onChangeText={text => this.setState({username: text})}
		    	placeholder="Username"
		    />
		    <TextInput 
		    	underlineColorAndroid='transparent'
		    	secureTextEntry={true}
		    	style={styles.inputBox}
		    	onChangeText={text => this.setState({password: text})}
		    	placeholder="Password"
		    />
		    <View style={{flexDirection: 'row', }}>
			    <Button
			      onPress={() => navigation.dispatch({ type: 'Login' })}
			      title="Log in"
			    />
			    <Text> or </Text>
			    <Text 
			    	style={{color: 'blue'}}
					  onPress={() => console.log('sign up')}
					 >
					  Sign Up
					</Text>
		    </View>
		  </View>
		)
	}
}

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
  inputBox: {
  	height: 35,
  	width: 200,
  	borderColor: 'gray',
  	borderWidth: 1,
  	margin: 10,
  	padding: 3,
  },
});

export default LoginScreen;