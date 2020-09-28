import * as Facebook from 'expo-facebook';

const FacebookApi = {
    application_id: "623485305205948",
    permissions: ["public_profile"]
}

 export const SignFacebook = async () => {
   await Facebook.initializeAsync(FacebookApi.application_id);
   const { type, token } = await Facebook.logInWithReadPermissionsAsync({ permissions: FacebookApi.permissions  })
   if( type === "success") {
 	alert(`token: ${token}`);
   }
  }





 
