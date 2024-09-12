// ***************** Login User *****************
const loginUser = async (email, password) => {
  if (!email.trim() || !password.trim()) {
    throw Error('ALL FIELDS ARE REQUIRED');
  }

  const res = await fetch('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw Error(data.error);
  }
  localStorage.setItem('token', data.data.token);
  localStorage.setItem('email', data.data.email);
  return data.data;
};

// ***************** Register User *****************
const registerUser = async (email, password, passwordConfirm) => {
  if (!email.trim() || !password.trim() || !passwordConfirm.trim()) {
    throw Error('ALL FIELDS ARE REQUIRED');
  }

  if (password !== passwordConfirm) {
    throw Error('password confirm does not match');
  }

  const res = await fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  const data = await res.json();
  if (!res.ok) {
    throw Error(data.error);
  }
  localStorage.setItem('token', data.data.token);
  localStorage.setItem('email', data.data.email);
  return data.data;
};

export { loginUser, registerUser };
