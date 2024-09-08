// ***************** Get All Posts *****************
const getPosts = async () => {
  const res = await fetch('/api/posts');
  const data = res.json();
  if (!res.ok) {
    console.log(data);
    throw Error(data.error);
  }
  return data;
};

export { getPosts };
