import { useContext, useEffect } from 'react';
import { getPosts } from '../../Controllers/postsController';
import { PostContext } from '../../Contexts/PostContext';
import Post from '../../Components/Post';

const Home = () => {
  // Use post context
  const { posts, setPosts } = useContext(PostContext);
  useEffect(() => {
    setTimeout(async () => {
      const data = await getPosts();
      // console.log(data.data.posts);
      setPosts(data.data.posts);
    }, 3000);
  }, []);
  console.log(posts);

  return (
    <section className='card'>
      <h1 className='title'>Latest Posts</h1>

      {posts &&
        posts.map((post) => (
          <div key={post._id}>
            <Post post={post} />
          </div>
        ))}
    </section>
  );
};

export default Home;
