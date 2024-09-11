import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState();
  const [error, setError] = useState('');

  const handleSignIn = async () => {
    try {
      const response = await axios.post('http://192.168.1.4:3000/api/login', {
        email,
        password,
      }
    
    );
    const userName = response.data.user.name;
    if(userName){navigation.replace('UserScreen', { userName });}
   
      console.log('Sign in successful', response.data,userName);
      
    } catch (error) {
      setError('Invalid email or passwor');
      console.log('Sign in failed', error);
    }
  };

  return (
    <View style={styles.container}>
       <ImageBackground
    source={require('../assets/logo.png')} 
    style={styles.background}
    
  ></ImageBackground>
      <View style={styles.box}>
      <Text style={styles.header}>Sign In</Text>
      <Text style={styles.subheader}>Hi ! Welcome back, you have been missed</Text>

      <View style={styles.inputContainer}>
        <Icon name="mail-outline" size={20} color="#000" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="xyz@gmail.com"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="lock-closed-outline" size={20} color="#000" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
      </View>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <TouchableOpacity onPress={handleSignIn} style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>or</Text>

      <View style={styles.socialIcons}>
        <Icon name="logo-google" size={30} color="#000" />
        <Icon name="logo-apple" size={30} color="#000" />
      </View>

      <View style={styles.signupContainer}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signupText}>Sign Up</Text>
          <Text>{data}</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.termsText}>By login or sign up, you agree to our terms of use and privacy policy</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    position:'absolute',
    left: "25%",
    width: '80%',
    height: '60%',
  top:'10%'
    },
  container: {
    display: 'flex',
    position:'relative',
    alignItems: "center",
    justifyContent: 'center',
  
    padding: 20,
  },
  box:{ 
    position:"relative",
    top: "40%"
  },
  logo: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subheader: {
    fontSize: 14,
    color: '#777',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#1E90FF',
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
  forgotPassword: {
    textAlign: 'center',
    color: '#1E90FF',
    marginBottom: 20,
  },
  orText: {
    textAlign: 'center',
    marginVertical: 10,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signupText: {
    color: '#1E90FF',
  },
  termsText: {
    textAlign: 'center',
    color: '#777',
    marginTop: 30,
    fontSize: 12,
  },
});

export default SignInScreen;
