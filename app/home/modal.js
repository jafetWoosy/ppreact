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
  Alert,
} from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import { store } from "../redux/store";
import { connect } from "react-redux";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";

function ModalN(props) {
  //const [arraycomplement, setarracomplement] = useState(props.route.params.Complementos.complemento);
  const [dropitems, setdropitems] = useState([]);

  const [complemento1, setComplemento1] = useState([]);
  const [complemento2, setComplemento2] = useState([]);
  const [complemento3, setComplemento3] = useState([]);

  const { navigation } = props;

  const goToAderezo = () => {
    const ingredientesFormat = [];

    if (props.route.params.data.complementos[1][1].length === 1) {
      ingredientesFormat.push(complemento1);
    } else if (props.route.params.data.complementos[1][1].length === 2) {
      ingredientesFormat.push(complemento1);
      ingredientesFormat.push(complemento2);
    } else if (props.route.params.data.complementos[1][1].length === 3) {
      ingredientesFormat.push(complemento1);
      ingredientesFormat.push(complemento2);
      ingredientesFormat.push(complemento3);
    }

    console.log(ingredientesFormat);
    store.dispatch({
      type: "ADDEXTRA",
      value: {
        ingredientesFormat,
      },
    });

    navigation.navigate("modalA", { salsas: props.route.params.data.salsas, pechugas: props.route.params.data.pechugas });
  };

  const goToCart = () => {
    navigation.navigate("Cart");
  };

  const addComplemento = (element_complemento, i) => {
    if (i === 0) {
      setComplemento1([{}]);
      setComplemento1({ id: element_complemento, cantidad: 1, costo: 0 });
    } else if (i === 1) {
      setComplemento2([{}]);
      setComplemento2({ id: element_complemento, cantidad: 1, costo: 0 });
    } else if (i === 2) {
      setComplemento3([{}]);
      setComplemento3({ id: element_complemento, cantidad: 1, costo: 0 });
    }
  };

  const llenarDropDown = () => {
    const drop = props.route.params.data.complementos[1][0].map((element) => {
      return { label: element.nombre, value: parseInt(element.id_articulo) };
    });

    setdropitems(drop);
  };

  useEffect(() => {
    llenarDropDown();
    console.log("PARAMETROS ++++++++++++++++++++++++");
    console.log(props.route.params.data.pechugas);
    console.log("PARAMETROS ++++++++++++++++++++++++");
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
          onPress={goToCart}
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
          marginTop: 10,
        }}
      >
        <Text
          style={{ fontSize: (windowWidth * 7.5) / 100, fontWeight: "bold" }}
        >
          Elige tus complementos
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollView}
        style={{ height: "80%", marginTop: 10, width: "100%" }}
        showsVerticalScrollIndicator={false}
      >
        {props.route.params.data.complementos[1][1].map((element, i) => {
          return (
            <View style={styles.comple} key={i}>
              <View style={styles.completitile}>
                <Text style={styles.fonttitile}>Complemento {i + 1} </Text>
              </View>
              <View style={styles.containerItems}>
                <RadioForm
                  initial={-1}
                  formHorizontal={false}
                  labelHorizontal={true}
                  radio_props={dropitems}
                  onPress={(value) => addComplemento(value, i)}
                  buttonInnerColor={"#000"}
                  buttonStyle={{ backgroundColor: "red" }}
                />
              </View>
            </View>
          );
        })}
      </ScrollView>
      <TouchableOpacity
        onPress={goToAderezo}
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

export default connect(mapStateToProps)(ModalN);

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
    flex: 1,
    flexWrap: "wrap",
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    width: (windowWidth * 90) / 100,

    alignContent: "center",
  },

  itemButton: {
    width: (windowWidth * 28) / 100,
    height: (windowHeight * 6.5) / 100,
    backgroundColor: "#F0F0F0",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 5,
    marginTop: 5,
  },

  itemButton2: {
    width: (windowWidth * 28) / 100,
    height: (windowHeight * 6.5) / 100,
    backgroundColor: "yellow",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 5,
    marginTop: 5,
  },

  pressedButton: {
    backgroundColor: "red",
    width: 10,
    height: 15,
  },

  button: {
    backgroundColor: "blue",
    width: 10,
    height: 15,
  },
});
