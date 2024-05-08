'use client'
import { useState } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Logging in with:', { username, password });
  };
  return (
    <>
    <div className='flex justify-center'>
      <h1 className='flex items-center text-3xl text-blue-700 bg-slate-200  border-orange-500 px-5 py-5 shadow-2xl shadow-blue-800 rounded-full mt-10 mb-10 hover:cursor-pointer hover:bg-red-600 hover:text-white'>Login Page</h1>
      </div>
      <div className='flex justify-center'>
      <form>
        <InputField className='flex items-center border-solid border-2 rounded-lg shadow-md mb-4'
          label="Username:"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputField className='flex items-center border-solid border-2 rounded-lg shadow-md mb-4'
          label="Password:"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button label="Login" type="button" onClick={handleLogin}/>
      </form>
    </div>
    </>
  );
};

export default LoginPage;
