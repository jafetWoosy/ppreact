import React from 'react';
import { View, Text, Image } from 'react-native';
import {  NavigationContainer   } from '@react-navigation/native';
import {  createStackNavigator  } from '@react-navigation/stack';
import {  createBottomTabNavigator   } from '@react-navigation/bottom-tabs';


import Home from './../home/index';
import Status from './../status/index';
import Profile from './../profile/index';
import Cart from './../home/cart';
import Store from './../store/index';
import InfoStore from '../store/InfoStore';
import Canasta from './../home/canasta';
import addAdress from '../address/addAdress';
import ConfirmAddress from '../address/ConfirmAddress';
import Login from '../login/login';
import SignIn from '../login/signIn';
import RegisterTel from '../login/registerTel';
import Formregister from '../login/components/Formregister';
import Branch_office from '../home/Sucursales';
import MethodPayment from '../payment/methodPayment';
import MethodCard from '../payment/methodCard';
import Addcard from '../payment/addCard';
//  Import iconsTabBar 

const SignInStack = createStackNavigator();
const SignStackScreen = ( { } ) =>  {
   return (
       <SignInStack.Navigator>
         <SignInStack.Screen  name="Splash" component={Login} options={{ headerShown:false  }} />
         <SignInStack.Screen  name="SignIn" component={SignIn} options={{ headerShown:false  }} />
         <SignInStack.Screen  name="Formregister" component={Formregister} options={{ headerTitle: ''  }} />
         <SignInStack.Screen  name="RegisterTel" component={RegisterTel} options={
          {
              headerTitle:''
          }
      } />
       </SignInStack.Navigator>
   )
}







const HomeStack = createStackNavigator();

const HomeStackScreen = ({ navigation, route}) => {
    if (route.state) {
      if(route.state.index === 1 || route.state.index === 2 ){
        navigation.setOptions({ tabBarVisible: false });
        }
    }
    return(
     <HomeStack.Navigator>
     <HomeStack.Screen  name="Home"  component={Home}
     options={{ headerShown:false  }}
     />
     <HomeStack.Screen name="Cart" component={ Cart }  options={{ headerShown:false  }} />
     <HomeStack.Screen name="Canasta" component={ Canasta } />
     <HomeStack.Screen name="addAdreess" component={addAdress}  options={{ headerShown:false  }}/>
     <HomeStack.Screen name="ConfirmAdrees" component={ConfirmAddress}  options={{ headerTitle: 'Confirmar dirección'  }}/>
     <HomeStack.Screen name="branchs" component={ Branch_office }  options={{ headerTitle: ''  }}/>
     <HomeStack.Screen name="method" component={MethodPayment} options={{ headerTitle: ''  }}/>
     <HomeStack.Screen name="methodcard" component={MethodCard} options={{ headerTitle: ''  }}/>
     <HomeStack.Screen name="addcard" component={Addcard} options={{ headerTitle: ''  }}/>

     </HomeStack.Navigator>
    )
}

const StatusStack = createStackNavigator();

const AppTabs = createBottomTabNavigator();

const StatusStackScren = () => (
    <StatusStack.Navigator>
     <StatusStack.Screen name="Status" component={Status}  options={
         {
             headerTitle:'Seguimiento de orden'
         }
     }/>
    </StatusStack.Navigator>
)

const ProfileStack = createStackNavigator();

const ProfileStackScreen = () => (
    <ProfileStack.Navigator>
      <ProfileStack.Screen   name="Profile" component={ Profile } 
      options={ { headerTitle: 'Eduardo Olivera',    headerStyle: {   height: 100 }, headerTitleStyle: {
        fontSize: 29,
      }, }  }  />
    </ProfileStack.Navigator>
)


const StoreSctack = createStackNavigator();

const StoreStackScreen = () => (
    <StoreSctack.Navigator>
       <StoreSctack.Screen  name="Store" component={ Store } />
       <StoreSctack.Screen name="Info" component={InfoStore}/>
    </StoreSctack.Navigator>
)




const config = {
  activeTintColor: '#0000',
  style: {
      height: 80,
       textAlignVertical: 'center',
       paddingTop: 8,
       alignItems: 'center'
       
  },
  labelStyle: {
     fontSize: 14,
      
      paddingBottom: 12,
   },
}



 //   TABS BOTTOM

const  AppTabsScreen = () => (
    <AppTabs.Navigator
     initialRouteName="Home"
     tabBarOptions={
      config
         
     }
     >
     <AppTabs.Screen  name="Menú" component={HomeStackScreen}  options={{
       tabBarIcon: (props)   => <Image source={ require('../../assets/home/pollohover.png') }  style={{ width:40, height:30 }}  resizeMode='contain' tintColor="#000" />
     }}/> 
     <AppTabs.Screen name="Status" component={StatusStackScren} options={{
        tabBarIcon: (props)   => <Image source={ require('../../assets/home/status.png') }  style={{ width:40, height:30 }}  resizeMode='contain' tintColor="#000" />
      }}/>   
      
      <AppTabs.Screen  name="Store" component={StoreStackScreen } options={{ 
        tabBarIcon: (props)   => <Image source={ require('../../assets/home/locations.png') }  style={{ width:40, height:30 }}  resizeMode='contain' tintColor="#000" />
      }} />
      <AppTabs.Screen name="Profile" component={ProfileStackScreen} options={{
        tabBarIcon: (props)   => <Image source={ require('../../assets/home/profile.png') }  style={{ width:40, height:30 }}  resizeMode='contain' tintColor="#000" />
      }}/> 
    </AppTabs.Navigator>
)


export default () => {
  const lo = false;
  return (
    <NavigationContainer>
     {
       lo ? (<AppTabsScreen/>) : (<SignStackScreen/>)
     }
    </NavigationContainer>
  )
    
}
