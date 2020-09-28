import * as AppleAuthentication from 'expo-apple-authentication';

export const SignApple = async () => {

   try {
       const credential = await  AppleAuthentication.signInAsync({
           requestedScopes: [
            AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
            AppleAuthentication.AppleAuthenticationScope.EMAIL
           ],
       });
       
       console.log(credential);
       console.log('------ERROR----------');
   } catch (e) {
        if (e.code === "ERR_CANCELED") {
            console.log('+++++++ERROR++++++++');
            console.log(e);
            console.log('+++++++ERROR++++++++');
        }
   }
}