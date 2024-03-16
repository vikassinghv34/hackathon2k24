// components/PhoneAuth.js

import { auth } from '../../utility/firebase_setup';
import { useEffect, useRef, useState } from 'react';

import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { getUser } from 'src/utility/cloudFirestore';
import { setCookie } from 'src/utility/cookies';

const PhoneAuth = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const recaptchaContainerRef = useRef(null);
  useEffect(() => {
    if (recaptchaContainerRef.current) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: 'invisible',
        callback: () => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      });
    }
  }, []);

  const handleSignIn = async (phonenum: string) => {
    const phoneNumber = phonenum;
    signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier)
      .then((confirmationResult) => {
        const code = window.prompt('Enter the code');
        if (code)
          confirmationResult
            .confirm(code)
            .then((result) => {
              // User signed in successfully.
              const user = result.user;
              console.log(user);
              setCookie('uid', user.uid, 30);
              getUser(user.uid).then((res) => {
                if (res) {
                  // Navigate to Home screen
                } else {
                  // Navigate to SignUp Screen
                }
              });
              // ...
            })
            .catch(() => {
              // User couldn't sign in (bad verification code?)
              // ...
              // window.recaptchaVerifier.render().then((id:any) => {
              //   window.recaptchaVerifier.reset(id);
              // })
            });
      })
      .catch((error) => {
        window.alert(error);
        // Error; SMS not sent
        // ...
      });
    // Handle OTP verification
  };

  return (
    <div className="w-full max-w-xs mx-auto my-auto content-center py-10">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
            Phone Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Phone Number"
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={() => handleSignIn(phoneNumber)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Get OTP
          </button>
          {/* <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Resend OTP
          </a> */}
        </div>
      </form>
      <div id="recaptcha-container" ref={recaptchaContainerRef}></div>
      <p className="text-center text-gray-500 text-xs">&copy;2024 HZTL. All rights reserved.</p>
    </div>
  );
};

export default PhoneAuth;
