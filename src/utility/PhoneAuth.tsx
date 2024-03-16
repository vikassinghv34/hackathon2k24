// components/PhoneAuth.js

import { auth } from './firebase_setup';
import { useEffect, useRef, useState } from 'react';

import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

const PhoneAuth = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const recaptchaContainerRef = useRef(null);
  useEffect(() => {
    if (recaptchaContainerRef.current) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        'size': 'invisible',
        'callback': (response: any) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        }
      });
    }
 }, []);

 const handleSignIn = async (phonenum:string) => {
     const phoneNumber = phonenum;
     signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier).then((confirmationResult) => {
    
         const code = window.prompt('Enter the code');
         if(code)
            confirmationResult.confirm(code).then((result) => {
                // User signed in successfully.
                const user = result.user;
                console.log(user);
                // ...
            }).catch((error) => {
                // User couldn't sign in (bad verification code?)
              // ...
              // window.recaptchaVerifier.render().then((id:any) => {
              //   window.recaptchaVerifier.reset(id);
              // })
            });
     }).catch((error) => {
            // Error; SMS not sent
            // ...
     }
     );
    // Handle OTP verification
    };
    
       
//     return (
//         <div>
//       <button onClick={handleSignIn}>Sign in with Phone</button>
//       <div id="recaptcha-container"  ref={recaptchaContainerRef}></div>
//     </div>
  //  );
  
   return (
     <div style={ {display:'block'}} className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div  className="w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">
            Phone Number:
          </label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="flex items-center justify-between">
           <button
             onClick={()=>handleSignIn(phoneNumber)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
       </div>
        <div id="recaptcha-container"  ref={recaptchaContainerRef}></div>
     </div>
     
 );
};

export default PhoneAuth;
