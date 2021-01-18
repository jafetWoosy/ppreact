import * as Facebook from 'expo-facebook';

const FacebookApi = {
  application_id: "434084214245577",
  permissions: ["public_profile"]
}

export const SignFacebook = async () => {
  await Facebook.initializeAsync(FacebookApi.application_id);
  const { type, token } = await Facebook.logInWithReadPermissionsAsync({ permissions: FacebookApi.permissions })
  if (type === "success") {  
    const _urlAuthFacebook = "https://testpuroporllo.herokuapp.com/app/auth/facebook";

    let tkn = { access_token: token }
    let options = {
      method: 'POST',
      body: JSON.stringify(tkn),
      headers: {
        'Content-Type': 'application/json'
      }
    }
       
      const response =  await fetch(_urlAuthFacebook, options);
     
      const final_token = await response.json();
      console.log(final_token);
      return {  final_token, status: true  }
  }else {
    return { status: false,  final_token: false }
  }
}






