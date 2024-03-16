// // components/PhoneAuth.js

import { auth } from '../../utility/firebase_setup';
import { useEffect, useRef, useState } from 'react';
import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { getUser } from 'src/utility/cloudFirestore';
import { setCookie } from 'src/utility/cookies';
import { ComponentProps } from 'lib/component-props';
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
type LoginProps = ComponentProps & {
  fields: {
    PhoneNumberLabel: Field<string>;
    GetOTPLabel: Field<string>;
  };
};
const Login = ({ fields }: LoginProps): JSX.Element => {
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
            {/* Phone Number */}
            {fields?.PhoneNumberLabel?.value}
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder={fields?.PhoneNumberLabel?.value}
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleSignIn(phoneNumber)}
            className="bg-blue-700 text-black font-bold py-2 px-4 border 2px rounded black focus:outline-none focus:shadow-outline"
            type="button"
          >
            {fields?.GetOTPLabel?.value}
          </button>
        </div>
      </form>
      <div id="recaptcha-container" ref={recaptchaContainerRef}></div>
    </div>
  );
};
export default withDatasourceCheck()<LoginProps>(Login);
