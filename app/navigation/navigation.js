import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import {  NavigationContainer   } from '@react-navigation/native';
import {  createStackNavigator, TransitionPresets  } from '@react-navigation/stack';
import {  createBottomTabNavigator   } from '@react-navigation/bottom-tabs';
import {   useSelector } from 'react-redux'
import { Platform } from 'react-native';

import Home from './../home/index';
import modalCart from '../home/modalcart';
import modalExtra from '../home/modalExtras';
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
import ModalN from '../home/modal';
import ModalA from '../home/aderezos';
import Intro from '../login/Intro';
import Pechugas from '../home/pechugas';

import panelLogin from '../home/panelLogin';

import { useFonts } from 'expo-font';


//  Import iconsTabBar 

const SignInStack = createStackNavigator();
const SignStackScreen = (  ) =>  {
   return (
       <SignInStack.Navigator>
         
         <SignInStack.Screen  name="Splash" component={Login} options={{ headerShown:false  }} />
         <SignInStack.Screen  name="Intro" component={Intro} options={{ headerShown:false  }} />
         <SignInStack.Screen  name="SignIn" component={SignIn} options={{ headerShown:false  }} />
         <SignInStack.Screen  name="Formregister" component={Formregister} options={{ headerTitle: ''  }} />
         <SignInStack.Screen  name="RegisterTel" component={RegisterTel} options={
          {
              headerTitle:''
          }
      } />
         <SignInStack.Screen  name="Home" component={HomeStackScreen} options={{ headerTitle: '', headerShown: false  }} />

       </SignInStack.Navigator>
   )
}







const HomeStack = createStackNavigator();

const HomeStackScreen = ({ navigation, route,  }) => {
  const { modalvisible } = useSelector(state => state.colorsTabsReducer)
   
    if (route.state) {
             
      if(route.state.index === 1 || route.state.index === 2 ){
        navigation.setOptions({ tabBarVisible: false,     });
        console.log('esconder')
        }

        if(route.state.index === 0  ){
          navigation.setOptions({ tabBarVisible: true });
        console.log('no')
          }
    }
    return(
     <HomeStack.Navigator
    screenOptions={({ route })=> {
      
      if(modalvisible) {
        return {
          gestureEnabled: true,
          cardOverlayEnabled: true,
          ...TransitionPresets.ModalPresentationIOS,
        }
        
      }else {
        return {}
      }
    }}
     modal="modal"
     headerMode="none"
     >
     <HomeStack.Screen  name="Home"  component={Home}
     options={{ headerShown:false,  }} 
     />
     <HomeStack.Screen name="Cart" component={ Cart }  options={{ headerShown:false  }}  
     
     />
     <HomeStack.Screen name="modalcart" component={ modalCart } />
     <HomeStack.Screen name="modalextra" component={ modalExtra } />
     <HomeStack.Screen name="Canasta" component={ Canasta } />
     <HomeStack.Screen name="addAdreess" component={addAdress}  options={{ headerShown:false  }}/>
     <HomeStack.Screen name="ConfirmAdrees" component={ConfirmAddress}  options={{ headerTitle: 'Confirmar dirección'  }}/>
     <HomeStack.Screen name="branchs" component={ Branch_office }  options={{ headerTitle: ''  }}/>
     <HomeStack.Screen name="method" component={MethodPayment} options={{ headerTitle: ''  }}/>
     <HomeStack.Screen name="methodcard" component={MethodCard} options={{ headerTitle: ''  }}/>
     <HomeStack.Screen name="addcard" component={Addcard} options={{ headerTitle: ''  }}/>
     <HomeStack.Screen name="modal" component={ModalN} options={{ headerTitle: ''  }}/>
     <HomeStack.Screen name="modalA" component={ModalA} options={{ headerTitle: ''  }}/>
     <HomeStack.Screen name="modalB" component={Pechugas} options={{ headerTitle: ''  }}/>
     <HomeStack.Screen name="panelLogin" component={panelLogin} options={{ headerTitle: ''  }}/>






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

const ProfileStackScreen = ({ }) => {
      
      const { invited, isLoggedIn }  = useSelector(state => state.loginReducer);
      
      let headerTitle = "";
      
      if (!isLoggedIn) {
        headerTitle = "Iniciar sesión"
      } else {
        headerTitle = "Nombre de persona"
      }

      let ANDROID_OPTIONS_HEADER = { headerTitle,
      headerStyle: {   height: 100 },
      headerTitleStyle: {
      fontSize: 29,
      }, }

      let IOS_OPTIONS_HEADER = { headerTitle,
      right: 60,
      headerStyle: {   height: 100 },
      headerTitleStyle: {
      alignSelf: 'flex-start',
      fontSize: 29,
      }, }
       
      
    return(
      <ProfileStack.Navigator
       
      >
      <ProfileStack.Screen   name="Profile" component={ Profile } 
      options={ Platform.OS === "android" ? ANDROID_OPTIONS_HEADER : IOS_OPTIONS_HEADER  }  />
       </ProfileStack.Navigator>
    )
    
}



const StoreSctack = createStackNavigator();

const StoreStackScreen = ({ navigation, route,  }) => {
  if (route.state) {
             
    if(route.state.index === 1 || route.state.index === 2 ){
      navigation.setOptions({ tabBarVisible: false,     });
      console.log('esconder')
      }

      if(route.state.index === 0  ){
        navigation.setOptions({ tabBarVisible: true });
      console.log('no')
        }
  }
  return (
    <StoreSctack.Navigator
    screenOptions={({ route })=> {
      return {
        gestureEnabled: true,
        cardOverlayEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
      }
      
    }}>
       <StoreSctack.Screen  name="Store" component={ Store } options={{ headerTitle: 'Tiendas'  }}/>
       <StoreSctack.Screen name="Info" component={InfoStore} options={{ headerTitle: 'Ejercito Mexicano', headerTintColor: "black"  }}/>
    </StoreSctack.Navigator>

  )


}




// ****      constantes de medicion de pantalla *** //
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
////  ----------------------------------------------- 




 //   TABS BOTTOM
     
 // colors of navigation
 




const  AppTabsScreen = (props) => {
  let [fontsLoaded] = useFonts({
    'Bebas-Neue': require('../../assets/fonts/BebasNeue-Regular.ttf'),
    'Londrina-Solid': require('../../assets/fonts/LondrinaSolid-Regular.ttf')
  
    
  });
    const { HOME, STATUS, STORE, PROFILE, opacitytab } = useSelector(state => state.colorsTabsReducer)
    
const config = {
  activeTintColor: 'black',
  style: {
       opacity: opacitytab,
       height: Platform.OS ===  "ios" ?  (windowHeight * 13)/100 : (windowHeight * 10)/100,
       textAlignVertical: 'center',
       paddingTop: 5,
       alignItems: 'center',
       marginTop: 0
       
  },
  labelStyle: {
     fontSize: 14,
      paddingBottom: 12,
      fontFamily: "Londrina-Solid"
     
   },
}


    return(
      <AppTabs.Navigator
     initialRouteName="Home"
     tabBarOptions={
      config
         
     }
     >
     <AppTabs.Screen  name="Menú" component={HomeStackScreen}  options={{
       
       tabBarIcon: (props)   => <Image source={ require('../../assets/home/pollohover.png') }  style={{ width:40, height:30, tintColor:HOME }}  resizeMode='contain'  />
     }}/> 
     <AppTabs.Screen name="Estatus" component={StatusStackScren} options={{
        tabBarIcon: (props)   => <Image source={ require('../../assets/home/status.png') }  style={{ width:40, height:30, tintColor:STATUS  }}  resizeMode='contain'  />
      }}/>   
      
      <AppTabs.Screen  name="Tiendas" component={StoreStackScreen } options={{ 
        tabBarIcon: (props)   => <Image source={ require('../../assets/home/locations.png') }  style={{ width:40, height:30, tintColor:STORE  }}  resizeMode='contain'  />
      }} />
      <AppTabs.Screen name="Perfil" component={ProfileStackScreen} options={{
        tabBarIcon: (props)   => <Image source={ require('../../assets/home/profile.png') }  style={{ width:40, height:30, tintColor:PROFILE  }}  resizeMode='contain'  />
      }}/> 
    </AppTabs.Navigator>
    )
    }


export default () => {
  const { invited, isLoggedIn }  = useSelector(state => state.loginReducer);
  
  return (
    <NavigationContainer>
     {
      ( invited || isLoggedIn ) ? (<AppTabsScreen/>) : (<SignStackScreen/>)
     }
    </NavigationContainer>
  )
    
}
