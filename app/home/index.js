import React, { useState } from 'react';
import {  View, Dimensions, ScrollView, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
const windowWidth = Dimensions.get('window').width;     //  Constantes de medion de pantalla
const windowHeight = Dimensions.get('window').height;
import {  SwipeablePanel  } from 'rn-swipeable-panel';
import Canasta from '../home/canasta'


export default function Home(props){

  const {navigation} = props;
  const goToCart = () => {
    const { navigation } = props;
    navigation.navigate('Cart');
  }  
  const arr = [1,2,3,4,5];

  const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    openLarge: true,
    showCloseButton: true,
    onClose: () => closePanel(),
    onPressCloseButton: () => closePanel(),
    // ...or any prop you want
  });
  const [isPanelActive, setIsPanelActive] = useState(false);
 
  const OpenPanel = () => {
    setIsPanelActive(true);
  };
 
  const closePanel = () => {
    setIsPanelActive(false);
  };

    return (
        <View style={styles.container }>
            <View style={styles.header}>
                  <View style={{ width: '90%', height: '100%',  flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                  <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                  <Text style={{ fontWeight: 'bold', fontSize: ( windowWidth * 7 )/100,  }}>Hola Eduardo</Text>
                  <Text style={{ fontWeight: 'bold', fontSize: (windowWidth * 5 )/100, marginTop: 5, }}>Av De La Gaviotas 609</Text>
                </View>
                <View>
                   <TouchableOpacity onPress={ OpenPanel } style={{ width: 70, height: '40%', backgroundColor: 'black', borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', }}>
                    <FontAwesome name="shopping-cart" size={25} color="white" ></FontAwesome>       
                   <Text style={{color: 'white', fontSize: 20}}>4</Text>
                   </TouchableOpacity> 
                </View>
                  </View>
            </View>
            <View style={{ marginTop:15, }}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
             {
                 arr.map( element => {
                     return (
                        <View style={styles.rouded} key={element}>
                        </View>
                     )
                 })
             }
         </ScrollView>
            </View>
            {/* //  cards menu  */}
            <ScrollView contentContainerStyle={ styles.scrollView } style={{ height: "90%", marginTop:10  }} showsVerticalScrollIndicator={false}>
                {
                    arr.map( element => {
                        return(
                            
                                <TouchableOpacity style={styles.card} key={element}  onPress={ goToCart }>
                                <View style={styles.cardHeader}>
                                <Text style={{ fontSize: (windowWidth * 5 ) /100, fontWeight: 'bold' }}>Dedos para dos</Text>
                                </View>
                                <View style={styles.cardbody}>
                                  <View>
                                      <Text style={styles.text}>dedos para dos acompañado de</Text>
                                      <Text style={styles.text}>bla bla ala dedos para dos</Text>
                                      <Text style={styles.text}>acompañado de bla bla</Text>
                                  </View>
                                  <View>
                                      <Image  source={require('../../assets/home/pan.png')} resizeMode='cover' style={{ height: (windowWidth*20)/100, width: (windowWidth*30)/100 }} />
                                  </View>
                               </View>
                               <View style={styles.cardfooter}>
                                <Text style={{  fontWeight: 'bold', fontSize: (windowWidth * 5)/100 }}>$149.00</Text>
                                
                        </View>
                            </TouchableOpacity>
                            
                        )
                    })
                }
            </ScrollView>
                <SwipeablePanel {...panelProps} isActive={isPanelActive}
                    style={{  alignItems: 'center',  }} closeIconStyle={{ backgroundColor: 'white', }} closeRootStyle={{ backgroundColor: 'black', }}>
                           <Canasta navigation={navigation}/>
                </SwipeablePanel>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 30,
        
        
    },
    header: {
      
       width: '100%',
       height: '15%',
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'space-around'
    },
    rouded: {
       width: (windowWidth * 20)/100,
       height: (windowWidth * 20)/100,
       borderRadius:((windowWidth * 20)/100)/2,
       overflow: 'hidden',
       backgroundColor: "white",
       marginLeft: 15,
       borderColor: 'grey',
       borderWidth: 1

    },
    card: {
         
        justifyContent: 'center', 
        height: '23%',
        width: "90%",
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: '#FFFCFC',
        borderRadius: 6,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.20,
shadowRadius: 1.41,

elevation: 2,
        
        
    },
   
    cardHeader: {
        width: '90%',
        
    },
    cardfooter: {
        marginTop: 10,
        width: '90%',
        paddingBottom: 10
    },
    scrollView: {
       flexDirection: "column",
       alignItems: "center",
       marginTop: 10,
       
       
       
    },
    cardbody: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginTop: 7


    },
    text: {
        fontSize: ( windowWidth * 3) /100
    }
})
