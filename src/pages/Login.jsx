import React, { useState } from 'react';

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up');

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="pt-12 sm:px-6 lg:px-8 flex items-center justify-center bg-transparent py-12 px-2">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
        <form onSubmit={onSubmitHandler} className="space-y-6" noValidate>
          {/* Header Section */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 capitalize">{currentState}</h2>
            <div className="mt-2 h-1 w-12 bg-gray-900 mx-auto rounded" />
          </div>

          {/* Name Field (only for Sign Up) */}
          {currentState !== 'Login' && (
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your full name"
              />
            </div>
          )}

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete={currentState === 'Login' ? 'current-password' : 'new-password'}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your password"
            />
          </div>

          {/* Links Section */}
          <div className="flex items-center justify-between text-sm">
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
            >
              Forgot your password?
            </a>
            {currentState === 'Login' ? (
              <button
                type="button"
                onClick={() => setCurrentState('Sign Up')}
                className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out focus:outline-none"
              >
                Create an account
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setCurrentState('Login')}
                className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out focus:outline-none"
              >
                Sign in instead
              </button>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-secondary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          >
            {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;