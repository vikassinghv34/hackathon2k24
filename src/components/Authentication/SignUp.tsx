import { registerUser } from 'src/utility/cloudFirestore';
import { useState } from 'react';
import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type SignupProps = ComponentProps & {
  fields: {
    PhoneNumberLabel: Field<string>;
    GetOTPLabel: Field<string>;
  };
};

const SignUpPage = ({ fields }: SignupProps) => {
  const [name, setName] = useState('');

  const handleSignUp = async () => {
    await registerUser(name);
  };

  return (
    <div className="w-full max-w-xs mx-auto my-auto content-center py-10">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Name">
            {/* Name */}
            {fields?.PhoneNumberLabel?.value}
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder={fields?.PhoneNumberLabel?.value}
            type="text"
            id="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={() => handleSignUp()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            {/* Submit */}
            {fields?.GetOTPLabel?.value}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
