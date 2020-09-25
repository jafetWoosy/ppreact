import  React from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native';
import  {  useNavigation }  from '@react-navigation/native'

const windowWidth = Dimensions.get('window').width;     //  Constantes de medion de pantalla
const windowHeight = Dimensions.get('window').height;

export default function Canasta(props){
    
    const {navigation} = props;

    const goToPayment = () => {
      navigation.navigate('method');
    }

    return(
        <View style={ styles.container }>
            <View style={{ width: '90%'  }}>
               <Text style={{ fontSize: ( windowWidth * 7 )/100, fontWeight: 'bold' }}>Tu canasta</Text>
            </View>

            <View style={styles.containerScroll}>
                  <ScrollView  showsVerticalScrollIndicator={false}>
                        <View style={{ width: windowWidth, height: (windowHeight * 15) /100, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around',  }}>
                             <View>
                                 <Image  source={require('../../assets/home/pan.png')}  style={{  width: 100 , height: 50   }}  resizeMode="cover"  />
                             </View>
                             <View style={  {  flexDirection: 'column',  }}>
                                <Text style={{ fontSize: ( windowWidth* 3.5 )/100 }}>Dedos para dos</Text>
                                <Text style={{ fontSize: ( windowWidth* 3.5 )/100 }}>$149.00</Text>
                             </View>
                             <View style={ styles.num }>
                               <TouchableOpacity><Text style={ { fontSize: 40, paddingBottom: 5 } }>-</Text></TouchableOpacity>
                                <Text style={{ fontSize: 25 }}>4</Text>
                               <TouchableOpacity><Text style={ { fontSize: 30 } }>+</Text></TouchableOpacity>
                             </View>
                        </View>
                  </ScrollView>
            </View>
           <View style={{ marginTop: 25, borderRadius: 15, width: "90%", height: '9%', backgroundColor: '#000', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', }}>
               <View style={{ backgroundColor: 'white', width: '12%', height: '60%', alignItems: 'center', justifyContent: 'center' }}>
                 <Text style={{ fontSize: ( windowWidth * 6/ 100 ) }}>4</Text>
               </View> 
                <TouchableOpacity onPress={ goToPayment }> 
                <Text style={{ color: 'white', fontSize: ( windowWidth * 5) /100, left: 15 }}>Ir a pagar</Text>
                </TouchableOpacity>
               <Text style={{ color: 'white', fontSize: ( windowWidth * 4) /100 }}>$596.00</Text>
           </View>
           <Text style={{ marginTop: 12 }}>Vaciar canasta</Text> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: (windowWidth * 100 ) /100,
      height: (  windowHeight * 90  )/100,
      marginTop: 50,
      flexDirection: 'column',
      alignItems: 'center',
     
    },

    containerScroll: {
       width: '100%',
       height: '60%',
       
    },

    num: { flexDirection: 'row', width: 100, height: 40, backgroundColor: 'white', alignItems: 'center', justifyContent: 'space-evenly',
    shadowColor: "#000",

    shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.22,
shadowRadius: 2.22,

elevation: 3}
})