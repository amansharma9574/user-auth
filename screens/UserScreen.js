// UserScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const UserScreen = ({ route, navigation }) => {
  const { userName } = route.params; 

  const handleLogout = () => {
    navigation.replace('SignIn'); 
  };

  return (
    <View style={styles.container}>
      <ImageBackground
    source={require('../assets/logo.png')} 
    style={styles.background}
    
  ></ImageBackground>
  <View style={styles.box}>
      <Text style={styles.welcomeText}>Welcome {userName}</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
position: "absolute",
left:"20%",
top:"20%",
    width: '80%',  
    height: '50%'
  },
  box:{
    position:"relative",
    top:"20%",
  },
  container: {
    flex: 1,
   
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#1E90FF',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: "center"
  },
});

export default UserScreen;
