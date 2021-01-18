import  React from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native';
import  {  useNavigation }  from '@react-navigation/native'

import {  store} from '../redux/store';
import {  connect   } from 'react-redux';


const windowWidth = Dimensions.get('window').width;     //  Constantes de medion de pantalla
const windowHeight = Dimensions.get('window').height;


 function modalCart(props) {
   console.log('PROPS para el carrito', props)
    const {navigation} = props;

    const goToPayment = () => {
      navigation.navigate('method');
    }

    const goTOBACK = () => {
      navigation.navigate('Home');
    }

    const goToExtras = () => {
      navigation.navigate('modalextra');
    }

    const goToAddress = () => {
        navigation.navigate('addAdreess');
    }


    const sumCartproduct = (index) => {
      const productos =  props.state.cartProductReducer.productos;
      const total = productos[index].costo;
      
      console.log(productos[index].cantidad);
      let cant = productos[index].cantidad + 1 ;
      const dataproduct = productos;
      dataproduct[index].cantidad = cant;
      store.dispatch({
        type: "SUMQUANTITY",
        value: dataproduct,
        total: total
      })

      
    }



     return (
        <View style={ styles.container }>
        <View style={{ width: '90%', marginTop:40, flexDirection: "row", justifyContent: "space-between",  alignItems: "center" }}>
           <Text style={{ fontSize: ( windowWidth * 7 )/100, fontWeight: 'bold' }}>Tu canasta</Text>
           <TouchableOpacity onPress={ goTOBACK }  style={  {  width: 40, 
            height: 40,
            borderRadius: (40/2), 
            backgroundColor: 'black', opacity: .8,   flexDirection: 'row', alignItems: 'center', justifyContent: 'center'} }>     
            <Image  source={require('../../assets/xblanco.png')} tintColor="white" style={{  width:15 , height:15   }}  resizeMode="contain" />
        </TouchableOpacity>
        </View>

        <View style={styles.containerScroll}>
              <ScrollView  showsVerticalScrollIndicator={false}>
                  {
                    props.state.cartProductReducer.productos.map( (element, i) => {

                       return(
                        <View style={{ width: windowWidth, height: (windowHeight * 15) /100, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly',  }}>
                        <View  style={{  backgroundColor: "blue",  width: ( windowWidth * 15   )/ 100  }}>
                            <Image  source={{ uri: element.url}}  style={{  width: 120 , height: 50   }}  resizeMode="cover"  />
                        </View>
                        <View style={  {  flexDirection: 'column',  width: (   windowWidth  * 40  )/100,  }}>
                           <Text style={{ fontSize: ( windowWidth* 4.5 )/100 }}>{element.nombreProduct}</Text>
                           <Text style={{ fontSize: ( windowWidth* 3.5 )/100 }}>{element.costo}</Text>
                        </View>
                        
                   </View>
                       )

                    } )
                  }
                     <TouchableOpacity onPress={goToExtras} style={{ width: "100%" ,  alignItems:"center", justifyContent: "center", marginTop: 20  }}>
                           <Text style={{  fontSize: 20, fontWeight: "bold" }}>¿Deseas algún extra?</Text>
                     </TouchableOpacity> 
              </ScrollView>
        </View>
       <View style={{ marginTop: 25, borderRadius: 15, width: "90%", height: '9%', backgroundColor: '#000', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', }}>
           <View style={{ backgroundColor: 'white', width: '12%', height: '60%', alignItems: 'center', justifyContent: 'center' }}>
             <Text style={{ fontSize: ( windowWidth * 6/ 100 ) }}>1</Text>
           </View> 
            <TouchableOpacity onPress={ goToAddress }> 
            <Text style={{ color: 'white', fontSize: ( windowWidth * 5) /100,  }}>Ir a pagar</Text>
            </TouchableOpacity>
           <Text style={{ color: 'white', fontSize: ( windowWidth * 4) /100 }}>${props.state.cartProductReducer.PAGOTOTAL}</Text>
       </View>
       <Text style={{ marginTop: 12 }}>Vaciar canasta</Text> 
    </View>
)
}


const mapStateToProps = (state) => {
  return{
      state
  }
}

export default connect(mapStateToProps)(modalCart);



const styles = StyleSheet.create({
container: {
  flex: 1,
  width: (windowWidth * 100 ) /100,
  height: (  windowHeight * 90  )/100,
   
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: "white"
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