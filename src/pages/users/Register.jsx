import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Alert from '../../Components/Alert';
import { registerUser } from '../../Controllers/usersController';
import { UserContext } from '../../Contexts/UserContext';

const Register = () => {
  // Use user Context
  const { setUser } = useContext(UserContext);

  // use navigate hook
  const navigate = useNavigate();

  // Error State
  const [error, setError] = useState(null);

  // Form Data State
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
  });

  // handle Register Function
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Register the user
      await registerUser(
        formData.email,
        formData.password,
        formData.passwordConfirm
      );
      // Update the user state
      setUser({ email: formData.email, posts: [] });
      // Navigate to Dashboard
      navigate('/dashboard');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className='card'>
      <h1 className='title'>Create New Account</h1>
      <form onSubmit={handleRegister}>
        <input
          type='email'
          placeholder='Email Address'
          className='input'
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          autoFocus
        />
        <input
          type='password'
          placeholder='Password'
          className='input'
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <input
          type='password'
          placeholder='Confirm Password'
          className='input'
          value={formData.passwordConfirm}
          onChange={(e) =>
            setFormData({ ...formData, passwordConfirm: e.target.value })
          }
        />
        <button className='btn'>Register</button>
      </form>
      {error && <Alert msg={error} />}
    </section>
  );
};

export default Register;
