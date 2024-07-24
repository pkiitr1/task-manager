// src/Login.js
import React from 'react';

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <a
          href="http://localhost:3000/auth/google"
          className="w-full py-2 px-4 bg-red-500 hover:bg-red-600 text-white font-bold rounded"
        >
          Sign in with Google
        </a>
      </div>
    </div>
  );
};

export default Login;
