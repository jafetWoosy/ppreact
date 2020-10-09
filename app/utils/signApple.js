import * as AppleAuthentication from 'expo-apple-authentication';

export const SignApple = async () => {

   try {
       const credential = await  AppleAuthentication.signInAsync({
           requestedScopes: [
            AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
            AppleAuthentication.AppleAuthenticationScope.EMAIL
           ],
       });
    //    const _URL = _URL;
    //    const options = {
    //     method: 'POST',
    //     body: JSON.stringify({}),
    //     headers: {
    //      'Content-Type': 'application/json'
    //     }
    // //     }  
    //    try {
    //     const result = await fetch(_URL,options);
    //     const response  = result.json();
    //     alert('RESPONSE:', response)
    //    } catch (error) {
    //     alert('error:', error)
    //    }
       alert(credential);
       
   } catch (e) {
        if (e.code === "ERR_CANCELED") {
            console.log('+++++++ERROR++++++++');
            console.log(e);
            console.log('+++++++ERROR++++++++');
            alert(credential);

        }
   }
}