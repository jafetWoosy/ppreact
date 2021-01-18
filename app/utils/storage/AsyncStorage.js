import AsyncStorage from '@react-native-community/async-storage';


export const storeData = async (value) => {
    try {
        await AsyncStorage.setItem("@STORAGE_TOKEN", value);
        return true;
    } catch (e) {
         alert('upps lo sentimos ocurrio un error vuelva a intentarlo');
    }
}  


export const getStoreData = async () => {
    try {
      const value = await AsyncStorage.getItem("@STORAGE_TOKEN");
      if (value!= null) {
        return {  status: true, value: value };
      }else 
        return {  status: false, value: false  };
    } catch (e) {
       return {  status: false, value: false  };
    }
}




export const deleteStoreData = async () => {  
    try {
         
    } catch (e) {
      
    }
   
}


