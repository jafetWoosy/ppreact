import React, { useState, useEffect } from "react";
import {
  View,
  Dimensions,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar,
} from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
import { store } from "../redux/store";
import { connect } from "react-redux";


function ModalA(props) {
  const [dropitems, setdropitems] = useState([]);
  const [salsa1, setSalsa1] = useState([]);
  const [salsa2, setSalsa2] = useState([]);
  const [salsa3, setSalsa3] = useState([]);
  const [existPechuga, setExistePechuga] = useState(false);

  const Redirect = () => {
    const ingredientesFormat = [];
    if (props.route.params.salsas[1][1].length === 1) {
      ingredientesFormat.push(salsa1);
    } else if (props.route.params.salsas[1][1].length === 2) {
      ingredientesFormat.push(salsa1);
      ingredientesFormat.push(salsa2);
    } else if (props.route.params.salsas[1][1].length === 3) {
      ingredientesFormat.push(salsa1);
      ingredientesFormat.push(salsa2);
      ingredientesFormat.push(salsa3);
    }

    store.dispatch({
      type: "ADDEXTRA",
      value: {
        ingredientesFormat,
      },
    });

    if (existPechuga) {
          props.navigation.navigate('modalB', {  pechugas:  props.route.params.pechugas  });
    }else{
         props.navigation.pop(2);
        
        console.log('Redirigimos a pantalla anterior');
    }
  };

  const llenarDropDown = () => {
    const drop = props.route.params.salsas[1][0].map((element) => {
      return { label: element.nombre, value: parseInt(element.id_articulo) };
    });

    setdropitems(drop);
  };

  const addSalsa = (element_complemento, i) => {
    if (i === 0) {
      setSalsa1([{}]);
      setSalsa1({ id: element_complemento, cantidad: 1, costo: 0 });
      console.log(salsa1);
    } else if (i === 1) {
      setSalsa2([{}]);
      setSalsa2({ id: element_complemento, cantidad: 1, costo: 0 });
    } else if (i === 2) {
      setSalsa3([{}]);
      setSalsa3({ id: element_complemento, cantidad: 1, costo: 0 });
    }
  };

   const verifyPechugas = () => {
      const counterPechugas = props.route.params.pechugas.length;
      if (counterPechugas <=1) {
        console.log('No existen pechugas')
        setExistePechuga(false)
        
      }else if (counterPechugas >=2  ){
         console.log('SI existen pechugas');
        setExistePechuga(true);
      }

   }
  

  useEffect(() => {
    llenarDropDown();
    verifyPechugas();
    
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          width: "90%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            borderRadius: 40 / 2,
            backgroundColor: "black",
            opacity: 0.8,
            left: 1,
            marginTop: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../../assets/xblanco.png")}
            tintColor="white"
            style={{ width: 15, height: 15 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          right: 25,
          marginTop: 5,
        }}
      >
        <Text
          style={{
            fontSize: (windowWidth * 6) / 100,
            fontWeight: "bold",
            right: 10,
          }}
        >
          Elige tus salsas y aderezos
        </Text>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        style={{ height: "80%", marginTop: 10, width: "100%" }}
        showsVerticalScrollIndicator={false}
      >
        {props.route.params.salsas[1][1].map((element, i) => {
          return (
            <View style={styles.comple} key={i}>
              <View style={styles.completitile}>
                <Text style={styles.fonttitile}>Aderezo {i + 1} </Text>
              </View>
              <View style={styles.containerItems}>
                <RadioForm
                  initial={-1}
                  formHorizontal={false}
                  labelHorizontal={true}
                  radio_props={dropitems}
                  onPress={(value) => addSalsa(value, i)}
                  buttonInnerColor={"#000"}
                  buttonStyle={{ backgroundColor: "red" }}
                />
              </View>
            </View>
          );
        })}
      </ScrollView>

      <TouchableOpacity
        onPress={Redirect}
        style={{
          width: "90%",
          backgroundColor: "black",
          height: "8%",
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 10,
        }}
      >
        <Text style={{ color: "white", fontSize: (windowWidth * 6) / 100 }}>
          Siguiente
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps)(ModalA);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },

  scrollView: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 10,
  },

  comple: {
    marginTop: 10,
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
  },

  completitile: {
    width: "90%",
    justifyContent: "flex-start",
  },

  fonttitile: {
    color: "black",
    fontWeight: "bold",
    fontSize: (windowWidth * 4) / 100,
    left: 5,
  },

  containerItems: {
    marginTop: 10,
    flexDirection: "column",
    width: (windowWidth * 90) / 100,

    justifyContent: "space-evenly",
  },

  itemButton: {
    width: (windowWidth * 28) / 100,
    height: (windowHeight * 6.5) / 100,
    backgroundColor: "#F0F0F0",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
