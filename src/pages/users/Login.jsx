import { useState } from 'react';
import Alert from '../../Components/Alert';
import { loginUser } from '../../Controllers/usersController';

export const Login = () => {
  const [error, setError] = useState(null);

  // Form Data State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // handle Login Function
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className='card'>
      <h1 className='title'>Login to your account</h1>
      <form onSubmit={handleLogin}>
        <input
          type='email'
          placeholder='Email Address'
          className='input'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoFocus
        />
        <input
          type='password'
          placeholder='Password'
          className='input'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='btn'>Login</button>
      </form>
      {error && <Alert msg={error} />}
    </section>
  );
};

export default Login;
