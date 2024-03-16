// import React from 'react';
// import firebase from 'firebase/app';
// import {getAuth,RecaptchaVerifier,signInWithPhoneNumber} from 'firebase/auth';
// const PhoneAuthPage = () => {
//   const handlePhoneAuth = () => {
//     const phoneNumber = '+919998441580'; // Enter the phone number to authenticate
//     const AUTH = getAuth();
    
//     const recaptchaVerifier = new RecaptchaVerifier(AUTH,'recaptcha-container', {
//       size: 'invisible'
       
//     });
    
//     signInWithPhoneNumber(AUTH,phoneNumber, recaptchaVerifier)
//       .then((confirmationResult) => {
//         const code = prompt('Enter the verification code:');
//         if (code) {
//           confirmationResult.confirm(code)
//             .then((result) => {
//               // Phone number successfully verified
//               console.log(result.user);
//             })
//             .catch((error) => {
//               // Verification failed
//               console.error(error);
//             });
//         }
//       })
//       .catch((error) => {
//         // Error occurred during phone authentication
//         console.error(error);
//       });
//   };

//   return (
//     <div>
//       <button onClick={handlePhoneAuth}>Authenticate with Phone Number</button>
//       <div id="recaptcha-container"></div>
//     </div>
//   );
// };

// export default PhoneAuthPage;

// // import React, { useEffect, useState } from 'react';
// // import firebase from 'firebase/app';
// // import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

// // const PhoneAuthPage = () => {
// //   const [recaptchaKey, setRecaptchaKey] = useState(0); // State to trigger re-render of reCAPTCHA
// //   useEffect(() => { 
// //     handlePhoneAuth()
// //   },[])
// //  const handlePhoneAuth = () => {
// //     const phoneNumber = '+919998441580'; // Enter the phone number to authenticate
// //     console.log(recaptchaKey);
// //     const AUTH = getAuth();

// //    setRecaptchaKey(prevKey => prevKey + 1);
   
   
// //     const recaptchaVerifier = new RecaptchaVerifier(AUTH, 'recaptcha-container', {
// //       size: 'invisible',
// //       'data-size': 'invisible',
// //       'data-callback': (response: any) => {
// //         console.log("IN FIREBASE RECAP");
        
// //         signInWithPhoneNumber(AUTH, phoneNumber, recaptchaVerifier)
// //           .then((confirmationResult) => {
// //             const code = prompt('Enter the verification code:');
// //             if (code) {
// //               confirmationResult.confirm(code)
// //                 .then((result) => {
// //                  console.log(result.user);
// //                 })
// //                 .catch((error) => {
// //                  console.error(error);
// //                  setRecaptchaKey(prevKey => prevKey + 1);
// //                 });
// //             }
// //           })
// //           .catch((error) => {
// //             console.error(error);
// //             setRecaptchaKey(prevKey => prevKey + 1);
// //           });
// //       },
// //     });
// //   };

// //  return (
// //     <div>
// //       <button onClick={handlePhoneAuth}>Authenticate with Phone Number</button>
// //       <div id="recaptcha-container" key={recaptchaKey}></div> {/* Use key to trigger re-render */}
// //     </div>
// //  );
// // };

// // export default PhoneAuthPage;
