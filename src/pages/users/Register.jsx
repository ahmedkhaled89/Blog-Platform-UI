import { useState } from 'react';
import Alert from '../../Components/Alert';
import { registerUser } from '../../Controllers/usersController';

const Register = () => {
  const [error, setError] = useState(null);

  // Form Data State
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
  });

  // handle Login Function
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await registerUser(
        formData.email,
        formData.password,
        formData.passwordConfirm
      );
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
