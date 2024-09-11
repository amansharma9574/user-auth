import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import CheckBox from 'react-native-community-checkbox';
import axios from 'axios';
const SignUpScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);

  const handleSignIn = async () => {
    try {
      const response = await axios.post('http://192.168.1.4:3000/api/signup', {
        email,
        password,
        name
      }
    
    );
    const userName = response.data.user.name;
    if(userName){navigation.replace('UserScreen', { userName });}
   
      console.log('Sign up successful', response.data,userName);
      
    } catch (error) {
      
      console.log('Sign up failed', error);
    }
  };

  return (
    <View style={styles.container}>
      
      <ImageBackground
    source={require('../assets/logo.png')} 
    style={styles.background}
    
  ></ImageBackground>
  <View style={styles.box}>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.subtitle}>Fill in the below form and add life to your car!</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={(text) => setName(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="xyz@gmail.com"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />

        <View style={styles.checkboxContainer}>
          <CheckBox
          
          
          />
          <Text style={styles.checkboxLabel}>Agree with</Text>
          <TouchableOpacity>
            <Text style={styles.link}> Terms & Conditions</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={handleSignIn} style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <View style={styles.signUpTextContainer}>
          <Text>Already have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.link} onPress={() => navigation.navigate('SignIn')}> Sign In</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footerText}>
          By login or sign up, you agree to our terms of use and privacy policy
        </Text>

      
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
    display:'flex',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  box:{ 
    position:"relative",
    top: "50%"
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxLabel: {
    marginLeft: 8,
  },
  link: {
    color: 'blue',
    marginLeft: 5,
  },
  button: {
    backgroundColor: '#00bfff',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#092A4D',
    fontSize: 18,
  },
  signUpTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  footerText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#aaa',
  },
  
});

export default SignUpScreen;