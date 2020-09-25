import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { SwipeablePanel } from 'rn-swipeable-panel';
import PanelCash from '../home/components/panelCash';
const windowWidth = Dimensions.get('window').width;     //  Constantes de medion de pantalla
const windowHeight = Dimensions.get('window').height;


export default function MethodPayment( props ) {
     const { navigation } = props;
    const [cash, setCash] = useState(false);
    const [card, setCard] = useState(false);
    const [monto, setMonto] = useState(false);
    const [panelProps, setPanelProps] = useState({
        fullWidth: true,
        openLarge: true,
        showCloseButton: true,
        onClose: () => closePanel(),
        onPressCloseButton: () => closePanel(),

    });

    const [isPanelActive, setIsPanelActive] = useState(false);

    const OpenPanel = () => {
        setIsPanelActive(true);
    };

    const closePanel = () => {
        setIsPanelActive(false);
    };

    const selectCash = () => {
        setCash(true);
    }

    const selectCambio = () => {
        setMonto(true)
    }

    const goToCard = () => {
        navigation.navigate('methodcard');
    }



    return (
        <View style={styles.container}>
            <View style={styles.title} >
                <Text style={{ fontSize: (windowWidth * 6) / 100, marginLeft: 30, fontWeight: 'bold' }} >Elige tu forma de pago</Text>
            </View>
            <TouchableOpacity style={styles.line} onPress={selectCash}>
                <View style={{ width: '30%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: 70, height: 70, borderRadius: 70 / 2, backgroundColor: '#C5EBB4', alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../../assets/home/dollar.png')} style={{ width: 40, height: 40 }} resizeMode="contain" />
                    </View>
                </View>
                <View>
                    <Text style={{ fontSize: (windowWidth * 6) / 100, fontWeight: 'bold' }}>Pago en efectivo</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.line} onPress={ goToCard }>
                {
                    !cash ? (<LineCash />) : (<Linechange OpenPanel={OpenPanel} data={monto} />)

                }
            </TouchableOpacity>

            {
                cash ? (
                    <TouchableOpacity style={{ width: '90%', backgroundColor: '#D0D0D0', height: '10%', marginTop: 150, borderRadius: 12, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: (windowWidth * 5) / 100, color: '#B4B4B4', fontWeight: 'bold' }}>Confirmar orden</Text>
                    </TouchableOpacity>
                ) : (
                        <View></View>
                    )
            }

            <SwipeablePanel {...panelProps} isActive={isPanelActive}
                noBackgroundOpacity={true}
                style={{ alignItems: 'center', height: (windowHeight * 50) / 100, backgroundColor: '#979797' }} closeIconStyle={{ backgroundColor: 'white', }} closeRootStyle={{ backgroundColor: 'black', }}>
                <PanelCash selectCambio={selectCambio} />
            </SwipeablePanel>
        </View>
    )
}


const LineCash = () => {
    return (
        <>
            <View style={{ width: '30%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ width: 70, height: 70, borderRadius: 70 / 2, backgroundColor: '#B4DAEB', alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={require('../../assets/home/credit-card.png')} style={{ width: 40, height: 40 }} resizeMode="contain" />
                </View>
            </View>
            <View>
                <Text style={{ fontSize: (windowWidth * 6) / 100, fontWeight: 'bold' }}>Pago con tarjeta</Text>
            </View>
        </>

    )
}

const Linechange = (props) => {
    const { OpenPanel, data } = props;
    return (
        <TouchableOpacity style={{ width: '100%', height: 100, justifyContent: 'center', alignItems: 'center' }} onPress={OpenPanel}>
            <View style={{ width: '90%', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', }}>
                <Text style={{ fontSize: (windowWidth * 6) / 100, fontWeight: 'bold', color: '#C4C4C4' }}>{!data ? '¿Requieres cambio?' : 'pagare con un billete de 500'}</Text>
                <Text style={{ color: '#C4C4C4' }}>▼</Text>
            </View>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,

        alignItems: 'center'
    },
    title: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: '100%',
        height: '10%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },

    line: {
        backgroundColor: 'white',
        marginTop: 40,
        width: '100%',
        height: '15%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
})