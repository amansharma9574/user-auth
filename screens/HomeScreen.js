import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
 
    <View style={styles.container}>
           <ImageBackground
    source={require('../assets/logo.png')} 
    style={styles.background}
    
  ></ImageBackground>
      
      <Text style={styles.subtitle}>
        Sparkle & Shine Transform Your Drive with Every Wash!
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.buttonText}>Let's Start</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.signInText}>
          Already have an account? <Text style={styles.signInLink}>Sign in</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    background: {
    
      width: '100%',
      height: '50%',
      },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },

  subtitle: {
    fontSize: 16,
    color: '#7a7a7a',
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#add8e6',
    borderRadius: 25,
  
    paddingVertical: 15,
    paddingHorizontal: 60,
    marginBottom: 20,
    
  },
  buttonText: {
    fontSize: 18,
    color: '#092A4D',
    fontWeight: 'bold',
  },
  signInText: {
    fontSize: 14,
    color: '#7a7a7a',
  },
  signInLink: {
    color: '#00A3FF',
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
