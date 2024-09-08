import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Alert from '../../Components/Alert';
import { loginUser } from '../../Controllers/usersController';
import { UserContext } from '../../contexts/UserContext';

export const Login = () => {
  // use User Context
  const { setUser } = useContext(UserContext);

  // use navigate hook
  const navigate = useNavigate();

  // Error State
  const [error, setError] = useState(null);

  // Form Data State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // handle Login Function
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Login the user
      await loginUser(email, password);
      // Update the user state
      setUser({ email, posts: [] });
      // Navigate to Dashboard
      navigate('/dashboard');
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
