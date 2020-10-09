import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './app/navigation/navigation';
import Login from './app/login/login';
import SignIn from './app/login/signIn';
import ConfirmAddress from './app/address/ConfirmAddress';
import './app//redux/store';
import {  Provider  } from 'react-redux';



export default function App() { 
  return ( 
     
       <Navigation/>
     
   );
}
