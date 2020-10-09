

const URL_BASE = "https://testpuroporllo.herokuapp.com";
const path_auth_sms = "/app/auth_verify_sms";
const path_verify_sms = "/app/auth_verify_sms";
const _URL  = new URL(path_auth_sms,URL_BASE);
const _URL_verify = URL(path_verify_sms, URL_BASE );







export const sendPhone = async (telphone) => {
  
  const payload = { phononumber: telphone, channel: "sms"  }
  const options = {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
        'Content-Type': 'application/json'
    }
}
  const response = await fetch( _URL , options);
  const data  = await response.json();
  const { message  } = data;
  return  message; 

}



export const verifyCode = async (phonenumber, code) => {
   const payload = { phononumber: phonenumber, code: code }
   const options =  {
         method: 'POST',
          body: JSON.stringify(payload),
           headers: { 
            'Content-Type': 'application/json',
           
            }
        } 
    const response = await fetch(_URL_verify, options);
    const data = await response.json();
    const { token, mensaje } = data;
    return { token, mensaje };

}