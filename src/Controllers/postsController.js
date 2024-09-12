// ***************** Get All Posts *****************
const getPosts = async () => {
  const res = await fetch('/api/posts');
  const data = res.json();
  if (!res.ok) {
    throw Error(data.error);
  }
  return data;
};

// ***************** Get User Posts *****************
const getUserPosts = async () => {
  const token = localStorage.getItem('token');

  const res = await fetch('/api/posts/user', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();

  if (!res.ok) {
    throw Error(data.error);
  }
  return data.data;
};

// ***************** Delete User Posts *****************
const deletePost = async (_id) => {
  const token = localStorage.getItem('token');
  const res = await fetch(`/api/posts/${_id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  if (!res.ok) {
    throw Error(data.error);
  }
  return data;
};

// ***************** Create Post *****************
const createPost = async (title, body) => {
  if (!title.trim() || !body.trim()) {
    throw Error('ALL Fields Are Required');
  }

  const res = await fetch('/api/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.token}`,
    },
    body: JSON.stringify({ title, body }),
  });
  const data = await res.json();
  if (!res.ok) {
    throw Error(data.error);
  }
  return data.data;
};

// ***************** Update Post *****************
const updatePost = async (_id, title, body) => {
  if (!title.trim() || !body.trim()) {
    throw Error('ALL Fields Are Required');
  }
  const res = await fetch(`/api/posts/${_id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify({ title, body }),
  });
  const data = await res.json();
  if (!res.ok) {
    throw Error(data.error);
  }
  return data;
};

export { getPosts, getUserPosts, deletePost, createPost, updatePost };
