import React, { useState } from 'react';
import {Link,useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/loginSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginUserObject = {
    email,
    password,
  };
  const clearForm = () => {
   
    setEmail('');
    setPassword('');
    
  };
  const handleLogin = async (event) => {
    try {
      event.preventDefault();
      await dispatch(loginUser(loginUserObject));
     
      const isAuthenticated = localStorage.getItem('token') !== null;
      const user = JSON.parse(localStorage.getItem('user'));
      clearForm();
      console.log(`${user.role}`)
      console.log(`${isAuthenticated}`)
      if (isAuthenticated && user.role==='Admin') {
        navigate('/dashboard');
      }
      else
      {
        navigate('/homepage');
      }
    } catch (error) {
      console.error('Login failed:', error.response.data.error);
    }
  };

  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-red-400">
            Log in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mb-4">
              <label htmlFor="username" className="sr-only">Email</label>
              <input
                id="email"
                name="email"
                type="text"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-#FFAEAE placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-#FFAEAE placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-red-400 hover:text-red-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-red-300 to-red-400 hover:from-red-400 hover:to-red-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Log In
            </button>
          </div>

          <div className="text-sm text-center">
            Don't have an account?{' '}
            <Link as ={Link} to='/signup' className="font-medium text-red-400 hover:text-red-500">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
