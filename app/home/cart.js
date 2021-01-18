import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const windowsHeight = Dimensions.get("screen").height;
const windowsWidth = Dimensions.get("screen").width;
import { store } from "../redux/store";
import { connect } from "react-redux";
import { back } from "react-native/Libraries/Animated/src/Easing";

function Cart(props) {
  const [urlImage, setImage] = [props.route.params.elementProduct.url];
  const [productName, setname] = [props.route.params.elementProduct.name];
  const [idProduct, setIdProduct] = [
    parseInt(props.route.params.elementProduct.id_paquete),
  ];
  const [Precio, setIdPrecio] = [props.route.params.elementProduct.precio];
  const [Complementos, setComplementos] = useState(
    props.route.params.elementProduct.content_complementos.complemento
  );
  const [Salsas, setSalsas] = useState(
    props.route.params.elementProduct.content_salsas.salsa
  );
  const [Pechugas, setPechugas] = useState(
    props.route.params.elementProduct.content_pechugas.pechuga
  );
  const [numComplement, setnumc] = useState(
    props.route.params.elementProduct.content_complementos.cantidad
  );
  const [numSalsas, setnumcsalsas] = useState(
    props.route.params.elementProduct.content_salsas.cantidad
  );
  const [todoproductCOMPLEMENTOS, setTodoProduct] = useState([0]);
  const [todoproductSalsas, setTodoProductSalsas] = useState([0]);
  const [todoproductPechugas, setTodoProductPechugas] = useState([0]);
  const [ingredientes, setingredientes] = useState([]);

  const [activeComplementButton, setactiveComplement] = useState(true);

  

  const disableButtonForPackage = () => {
    if (idProduct === 204 || idProduct === 517 ||  idProduct === 510) {
      setactiveComplement(false);
    }
  };

  var arrayLE = [];
  var arraySalsas = [];
  var arrayPechugas = [];

  const { navigation } = props;

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

    pushIngredientes();
    navigation.navigate("Home");
  };

  const goToModalComplements = () => {
    store.dispatch({ type: "MODALVISIBLE" });
   
    if (todoproductCOMPLEMENTOS.length >= 2) {
      
      navigation.navigate("modal", {
        data: {
          complementos: todoproductCOMPLEMENTOS,
          salsas: todoproductSalsas,
          pechugas: todoproductPechugas
        },
      });
    } else if (todoproductCOMPLEMENTOS.length === 1) {
     
      navigation.navigate("modalA", { salsas: todoproductSalsas });
    }
  };

  const SetBottomTam = () => {
    store.dispatch({
      type: "TABVISIBLE",
    });
  };

  const setModalFalse = () => {
    store.dispatch({ type: "MODALFALSE" });
  };

  const pushArrayNumcomplement = () => {
    switch (numComplement) {
      case 1:
        console.log("STEP 1");
        arrayLE.push(Complementos, [1]);
        setTodoProduct([...todoproductCOMPLEMENTOS, arrayLE]);
        break;
      case 2:
        console.log("STEP 2");
        arrayLE.push(Complementos, [1, 2]);
        setTodoProduct([...todoproductCOMPLEMENTOS, arrayLE]);
        break;
      case 3:
        console.log("STEP 3");

        arrayLE.push(Complementos, [1, 2, 3]);
        setTodoProduct([...todoproductCOMPLEMENTOS, arrayLE]);
        break;
      default:
        break;
    }
  };

  const pushArraySalsas = () => {
    switch (numSalsas) {
      case 1:
        arraySalsas.push(Salsas, [1]);
        setTodoProductSalsas([...todoproductSalsas, arraySalsas]);
        break;
      case 2:
        arraySalsas.push(Salsas, [1, 2]);
        console.log("HAY DOS SALSAS");
        setTodoProductSalsas([...todoproductSalsas, arraySalsas]);
        break;
      case 3:
        arraySalsas.push(Salsas, [1, 2, 3]);
        setTodoProductSalsas([...todoproductSalsas, arraySalsas]);
      default:
        break;
    }
  };

  const pushArrayPechugas = () => {
     if (Pechugas.length > 0 ) {
       const cantidadPechigas =  props.route.params.elementProduct.content_pechugas.cantidad;
       switch (cantidadPechigas) {
        case 1:
          arrayPechugas.push(Pechugas, [1]);
          setTodoProductPechugas([...todoproductPechugas, arrayPechugas]);
          break;
        case 2:
          arrayPechugas.push(Pechugas, [1, 2]);
          console.log("HAY DOS SALSAS");
          setTodoProductPechugas([...todoproductPechugas, arrayPechugas]);
          break;
        case 3:
          arrayPechugas.push(Pechugas, [1, 2, 3]);
          setTodoProductPechugas([...todoproductPechugas, arrayPechugas]);
        default:
          break;
      }
       
     }
     else if(Pechugas.length === 0){
      
     }

  };

  const pushIngredientes = () => {
    const ingredientesFormat = props.route.params.elementProduct.content_ingredientes.map(
      (element) => {
        return {
          id: parseInt(element.ingrediente.id_articulo),
          cantidad: element.cantidad,
          costo: 0,
        };
      }
    );
    store.dispatch({
      type: "ADDEXTRA",
      value: {
        ingredientesFormat,
      },
    });
  };

  const RenderButton = () => {
    return (
      <TouchableOpacity
        style={{ marginTop: 40, width: "85%" }}
        onPress={goToModalComplements}
      >
        <Text
          style={{
            fontSize: (windowsWidth * 5) / 100,
            fontWeight: "bold",
            color: "#717171",
          }}
        >
          Selecciona tus complementos
        </Text>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    pushArrayPechugas();
    disableButtonForPackage();
    pushArrayNumcomplement();
    pushArraySalsas();
    const unsubscribe = navigation.addListener("focus", () => {
      setModalFalse();
      SetBottomTam();
    });
    return unsubscribe;
  }, [navigation]);

  const goToHome = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ImageBackground
        source={{ uri: urlImage }}
        style={{ width: "100%", height: 300 }}
      >
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            borderRadius: 50 / 2,
            backgroundColor: "black",
            opacity: 0.8,
            left: 20,
            marginTop: 35,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../../assets/xblanco.png")}
            style={{ width: 20, height: 20, tintColor: "white" }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </ImageBackground>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 5,
        }}
      >
        <View style={{ height: (windowsHeight * 15) / 100, width: "90%" }}>
          <Text
            style={{ fontWeight: "bold", fontSize: (windowsWidth * 6) / 100 }}
          >
            {productName}
          </Text>
          <Text style={styles.description}>
            6 piezas de nuestro delicioso pollo crusty +
          </Text>
          <Text style={styles.description}>
            1/4 de puré + 1/4 ensalada de col + 2 panes
          </Text>
          <Text style={styles.description}>
            colchon + i aderezo al gusto + salsa verde
          </Text>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <View style={styles.body}>
          <View style={{ marginTop: 5, width: "100%" }}>
            <Text
              style={{ fontSize: (windowsWidth * 6) / 100, fontWeight: "bold" }}
            >
              Elige tus complementos
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              height: 1,
              backgroundColor: "#EFEFEF",
              marginTop: 20,
            }}
          />
          {activeComplementButton ? <RenderButton /> : <View></View>}
        </View>
      </ScrollView>
      <TouchableOpacity
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          height: 80,
          backgroundColor: "#000",
        }}
        onPress={() =>
          goToHomeAndProductAGREGATE(
            idProduct,
            1,
            Precio,
            urlImage,
            productName
          )
        }
      >
        <TouchableOpacity>
          <Text style={{ color: "#fff", fontSize: 20 }}>
            Agregar al carrito
          </Text>
        </TouchableOpacity>
        <Text style={{ color: "#fff", fontSize: 20 }}>${Precio}.00</Text>
      </TouchableOpacity>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps)(Cart);

const styles = StyleSheet.create({
  body: {
    marginTop: 15,

    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "white",
    width: "90%",
  },
  description: {
    fontSize: (windowsWidth * 3.7) / 100,
  },
  containerImage: {
    width: "35%",
    alignItems: "center",
    borderRadius: 6,
    height: 130,
    justifyContent: "center",
  },

  equis: {},
});
