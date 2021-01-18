import React, { useState, useEffect } from 'react';
import {   View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, ScrollView  } from 'react-native';

const windowWidth = Dimensions.get('window').width;     //  Constantes de medion de pantalla
const windowHeight = Dimensions.get('window').height;

import {  store} from '../redux/store';
import {  connect   } from 'react-redux';

 function modalExtra(props){


  
  const goToHomeAndProductAGREGATE = (
    id,
    cantidad,
    costo,
    url,
    nombreProduct
  ) => {
    store.dispatch({
      type: "ADDPRODUCT",
      value: {
        id,
        cantidad,
        costo,
        url,
        nombreProduct,
      },
    });
    console.log('extra agregados')
  };
   

   const [quantityExtras, setQuantity] = useState();
   const [extras, setExtras] = useState([]);
   

   const {  navigation } = props;
   const GotoCart = () => {
       navigation.navigate('modalcart');
   }


   const getExtras = async () => {
    const url = "http://192.168.0.4:8000/extras"; 
    const response = await fetch(url);
    const dataFinal = await  response.json();
    console.log(dataFinal);
    setExtras(dataFinal); 
}

const sumExtra = async (i, type) => {
    const extrar = extras;
    let cant = extrar[i].cantidad;
    console.log(cant);
    if (type) { 
      cant = cant + 1;
      extrar[i].cantidad = cant;
      setExtras([])
      setExtras(extrar)
      console.log(extras);
    }
  
}


    

  

   useEffect(() => {
       getExtras();
       
   }, [])


    return(
        <View style={ styles.container }>
        <View style={{ width: '90%', marginTop:40, flexDirection: "row", justifyContent: "space-between",  alignItems: "center" }}>
           <Text style={{ fontSize: ( windowWidth * 7 )/100, fontWeight: 'bold' }}>Extras</Text>
           <TouchableOpacity  onPress={GotoCart}  style={  {  width: 40, 
            height: 40,
            borderRadius: (40/2), 
            backgroundColor: 'black', opacity: .8,   flexDirection: 'row', alignItems: 'center', justifyContent: 'center'} }>     
            <Image  source={require('../../assets/xblanco.png')} tintColor="white" style={{  width:15 , height:15   }}  resizeMode="contain" />
        </TouchableOpacity>
        </View>

        <View style={styles.containerScroll}>
              <ScrollView  showsVerticalScrollIndicator={false}>
                    {
                      extras.map( (element, index) => { 
                           return (
                             <>
                             <View  style={{ width:"100%", height:10, backgroundColor: "#f7f7f7", marginTop: 20 }}   />
                             <View style={{ width: windowWidth, height: (windowHeight * 15) /100, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around',  }}>
                                  <View>
                                      <Image  source={{ uri: element.url }}  style={{  width: 100 , height: 50   }}  resizeMode="cover"  />
                                  </View>
                                  <View style={  {  flexDirection: 'column', right: 35 }}>
                                     <Text style={{ fontSize: ( windowWidth* 4 )/100, fontWeight: "bold" }}>{element.nombre}</Text>
                                     <Text style={{ fontSize: ( windowWidth* 3.8 )/100 }}>${element.precio}</Text>
                                  </View>
                                  <View style={ styles.num }>
                                    <TouchableOpacity><Text style={ { fontSize: 40, paddingBottom: 5 } }>-</Text></TouchableOpacity>
                                     <Text style={{ fontSize: 25 }}>{element.cantidad}</Text>
                                    <TouchableOpacity><Text style={ { fontSize: 30 } }  onPress={  ()=>  sumExtra(index, true)   }>+</Text></TouchableOpacity>
                                  </View>
                             </View>
                             </>
                           )
                       })
                   }
              </ScrollView>
        </View>
       <View style={{ marginTop: 130, borderRadius: 15, width: "90%", height: '9%', backgroundColor: '#000', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', }}>
           
            <TouchableOpacity onPress={GotoCart} > 
            <Text style={{ color: 'white', fontSize: ( windowWidth * 5) /100,  }}>Confirmar</Text>
            </TouchableOpacity>
       </View>
    </View>
    )
}

const mapStateToProps = (state) => {
  return{
      state
  }
}

export default connect(mapStateToProps)(modalExtra);

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
       height: ( windowHeight * 60 )/100,
       backgroundColor: 'white',
       
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
