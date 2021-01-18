import React, { useState, useEffect } from 'react';
import { View, Dimensions, ScrollView, Image, StyleSheet, Text, TouchableOpacity, StatusBar, Platform } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons'
const windowWidth = Dimensions.get('window').width;     //  Constantes de medion de pantalla
const windowHeight = Dimensions.get('window').height;
import { SwipeablePanel } from 'rn-swipeable-panel';
import Canasta from '../home/canasta';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';



import { store } from '../redux/store';
import { connect } from 'react-redux';




function Home(props) {

    const { navigation } = props;

    const goToCart = (elementProduct) => {
        const { navigation } = props;
        navigation.navigate('Cart', { elementProduct });
    }


    const array_categorys = [

        {
            categoria: "dedos",
            image: require("../../assets/categorias/dedos.png")
        },

        {
            categoria: "horneado",
            image: require("../../assets/categorias/horneado.png")
        },

        {
            categoria: "crusty",
            image: require("../../assets/categorias/crusty.png")
        },

        {
            categoria: "combo",
            image: require("../../assets/categorias/combos.png")
        },

        {
            categoria: "ensalada",
            image: require("../../assets/categorias/ensaladas.png")
        },

        {
            categoria: "individual",
            image: require("../../assets/categorias/individuales.png")
        }

    ]




    let [fontsLoaded] = useFonts({
        'Bebas-Neue': require('../../assets/fonts/BebasNeue-Regular.ttf'),
        'Londrina-Solid': require('../../assets/fonts/LondrinaSolid-Regular.ttf')
    
        
    });


    const [panelProps, setPanelProps] = useState({
        fullWidth: true,
        openLarge: true,
        showCloseButton: true,
        onClose: () => closePanel(),
        onPressCloseButton: () => closePanel(),
        // ...or any prop you want
    });
    const [isPanelActive, setIsPanelActive] = useState(false);
    const [product, setProduct] = useState([]);
    const [saludo, setSaludo] = useState('');
    const [shadow, setShadow] = useState(true);

    const OpenPanel = () => {
        setIsPanelActive(true);
    };

    const closePanel = () => {
        setIsPanelActive(false);
    };

    const SetBottomTam = () => {
        store.dispatch({
            type: "TABVISIBLE"
        })
    }

    const setModalFalse = () => {
        store.dispatch({ type: "MODALFALSE" })
    }
   

    const redirectLogin = () =>  {
        navigation.navigate('panelLogin');
        store.dispatch({ type: "MODALVISIBLE" });
    }

    

    const getProducts = async () => {
        const url = "https://testpuroporllo.herokuapp.com/app/paquetes";
        const response = await fetch(url);
        const dataFinal = await response.json();
        const ProductsInitial = dataFinal.filter(element => element.categoria === "dedos");
        setProduct(ProductsInitial);


    }


    const showList = async (categorySelected) => {
        const url = "https://testpuroporllo.herokuapp.com/app/paquetes";
        const response = await fetch(url);
        const dataFinal = await response.json();
        const ProductsInitial = dataFinal.filter(element => element.categoria === categorySelected);
        setProduct(ProductsInitial);
    }

    const Saludo =  () => {
        props.state.loginReducer.invited ? setSaludo('Hola, invitado') : setSaludo('');
    }


    const setShadowCategory = () =>  {
         
    }


    const RenderCategorys = ({ element,  onButtonPressed = () => {}  }) =>  {


        const [isPressed, setIsPressed] = useState(false);
        
        
       const onPressed = () => {
          setIsPressed(!isPressed);
          onButtonPressed();
       }

        return (
            <TouchableOpacity style={ isPressed ? styles.roundedtwo : styles.rouded  }  onPress={() => showList(element.categoria)} onPressIn={onPressed}>
            <Image source={element.image} style={styles.category} resizeMode="cover" />
        </TouchableOpacity>
        )
    }







    const AppLoa = () =>  {
        return (
            <View>
               <Text>cargando</Text>
            </View>
        )
      }


    useEffect(() => {
        Saludo();
        getProducts();
        const unsubscribe = navigation.addListener('focus', () => {

            SetColorTab();
            setModalFalse();
        });
        return unsubscribe; 
    }, [navigation])

    const SetColorTab = () => {
        store.dispatch({
            type: "SCREEN_HOME"
        })
    }

    const gotoModalCart = () => {
        navigation.navigate("modalcart");
        store.dispatch({ type: "MODALVISIBLE" });
    }


    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.header}>
                <View style={{ width: '92%', height: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'column', alignItems: 'flex-start',  }}>
                        <Text style={{  fontSize: (windowWidth * 7.5) / 100, fontFamily: "Londrina-Solid" }}>{ saludo }</Text>
                        <View style={{ flexDirection: "row", alignItems: "center"  }}>
                        <Text style={{  fontSize: (windowWidth * 4.2) / 100, fontFamily: "Bebas-Neue"  }}>Para ordenar en linea</Text>
                         <TouchableOpacity  onPress={ redirectLogin } ><Text style={ {   fontFamily: "Bebas-Neue", fontSize: (windowWidth * 4.2) / 100,  } }> inicia sesión</Text></TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity onPress={gotoModalCart} style={{ width: 70, height: '40%', backgroundColor: 'black', borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', }}>
                            <Ionicons name="ios-cart" size={25} color="white" ></Ionicons>
                            <Text style={{ color: 'white', fontSize: 20 }}>{  props.state.cartProductReducer.productos.length   }</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{ marginTop: 10, }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ height: "14%", }}>
                    {
                        array_categorys.map((element, i) => {
                            return (
                                <RenderCategorys  element={element} key={i}/>
                            )
                        })
                    }
                </ScrollView>
            </View>
            {/* //  cards menu  */}
            <ScrollView contentContainerStyle={styles.scrollView} style={{}} showsVerticalScrollIndicator={false}>
                {
                    product.map((element, i) => {
                        return (
                            <TouchableOpacity style={styles.card} onPress={() => goToCart(element)} key={i}>
                                <View style={styles.cardHeader}>
                                    <Text style={{ fontSize: (windowWidth * 5.5) / 100, fontFamily: "Bebas-Neue" }}>{element.name}</Text>
                                </View>
                                <View style={styles.cardbody}>
                                    <View>
                                        <Text style={styles.text}>dedos para dos acompañado de</Text>
                                        <Text style={styles.text}>bla bla ala dedos para dos</Text>
                                        <Text style={styles.text}>acompañado de bla bla</Text>
                                        <Text style={{  fontFamily: "Bebas-Neue", fontSize: (windowWidth * 5.4) / 100, marginTop: 10 }}>${element.precio}</Text>
                                    </View>
                                    <View>
                                        <Image source={{ uri: element.url }} resizeMode='cover' style={{ height: (windowWidth * 20) / 100, width: (windowWidth * 30) / 100, top: -20 }} />
                                    </View>
                                </View>

                            </TouchableOpacity>

                        )
                    })
                }
            </ScrollView>
            <SwipeablePanel {...panelProps} isActive={isPanelActive}
                style={{ alignItems: 'center', height: (windowHeight * 80) / 100 }} closeIconStyle={{ backgroundColor: 'white', }} closeRootStyle={{ backgroundColor: 'black', }}>
                <Canasta navigation={navigation} />
            </SwipeablePanel>
        </View>
    )


}




const mapStateToProps = (state) => {
    return {
        state
    }
}


export default connect(mapStateToProps)(Home);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',


    },
    header: {

        width: '100%',
        height: '15%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: Platform.OS === "ios" ? 15 : 0

    },
    rouded: {
        width: (windowWidth * 20) / 100,
        height: (windowWidth * 20) / 100,
        borderRadius: ((windowWidth * 20) / 100) / 2,
        overflow: 'hidden',
        backgroundColor: "white",
        marginLeft: 15,
        
    },

    roundedtwo: {
        width: (windowWidth * 20) / 100,
        height: (windowWidth * 20) / 100,
        borderRadius: ((windowWidth * 20) / 100) / 2,
        overflow: 'hidden',
        backgroundColor: "white",
        marginLeft: 15,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 8,
},
shadowOpacity: 0.44,
shadowRadius: 10.32,

elevation: 16,
    },

    category: {
        width: (windowWidth * 20) / 100,
        height: (windowWidth * 20) / 100,
        borderRadius: ((windowWidth * 20) / 100) / 2,
        overflow: 'hidden',
        backgroundColor: "white",

    },

    card: {

        justifyContent: 'center',
        marginBottom: 5,
        width: "90%",
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: 'white',
        borderRadius: 6,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
        paddingTop: 10,
        paddingBottom: 10

    },

    cardHeader: {
        width: '90%',


    },
    cardfooter: {
        marginTop: 0,
        width: '90%',


    },
    scrollView: {
        flexDirection: "column",
        alignItems: "center",
        marginTop: 1,

        marginBottom: 50



    },
    cardbody: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginTop: 7,


    },
    text: {
        fontSize: (windowWidth * 3) / 100
    }
})
