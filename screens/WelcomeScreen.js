import { View, Text, Image, StatusBar} from 'react-native';

import React,{useEffect} from 'react';
import bgimage from '../assets/bgimg.png'

import {useNavigation} from '@react-navigation/native';

export default function WelcomeScreen() {

    const navigation =  useNavigation();
    useEffect(()=>{
      setTimeout(() => navigation.navigate('Home'), 2000)
      }, [])
  
    return (
        <View>
       <Image source={bgimage}/>
        </View>
    )}