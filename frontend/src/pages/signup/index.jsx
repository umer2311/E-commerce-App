import React, { useState } from 'react';
import {Link,useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signupUser } from '../../redux/loginSlice';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [phoneNumber, setContactNumber] = useState('');
  //const [role, setRole] = useState('user');
  const user={
    name,email,password,phoneNumber
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clearForm = () => {
    setName('');
    setEmail('');
    setpassword('');
    setContactNumber('');
  };

  const handleSignUp = async (event) => {

    try {
      event.preventDefault();
      await dispatch(signupUser(user));
      clearForm();
      navigate('/login');
    } catch (error) {
      console.error('Signup failed:', error.response.data.error);
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-red-400">
            Sign Up for an Account
          </h2>
        </div>
        <form method="POST" className="mt-8 space-y-6" onSubmit={handleSignUp}>
          <input type="hidden" name="remember" value="true" />
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-md w-full px-3 py-2 border border-#FFAEAE placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-md w-full px-3 py-2 border border-#FFAEAE placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email"
              />
            </div>
            <div>
              <label htmlFor="pass" className="sr-only">Password</label>
              <input
                id="pass"
                name="pass"
                type="pass"
                autoComplete="pass"
                required
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                className="rounded-md w-full px-3 py-2 border border-#FFAEAE placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
            <div>
              <label htmlFor="contactNumber" className="sr-only">Contact Number</label>
              <input
                id="contactNumber"
                name="contactNumber"
                type="tel"
                autoComplete="tel"
                required
                value={phoneNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                className="rounded-md w-full px-3 py-2 border border-#FFAEAE placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Contact Number"
              />
            </div>
           
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-red-300 to-red-400 hover:from-red-400 hover:to-red-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Sign Up
            </button>
          </div>
          <div className="text-sm text-center">
            Already have an account?{' '}
            <Link as={Link} to='/login' className="font-medium text-red-400 hover:text-red-500">
              Log In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
