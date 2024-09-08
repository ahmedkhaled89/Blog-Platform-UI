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

// ***************** Update User Posts *****************

export { getPosts, getUserPosts };
