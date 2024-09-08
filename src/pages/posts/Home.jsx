import { useContext, useEffect, useState } from 'react';
import { getPosts } from '../../Controllers/postsController';
import { PostContext } from '../../Contexts/PostContext';
import Post from '../../Components/Post';

const Home = () => {
  // Use post context
  const { posts, setPosts } = useContext(PostContext);

  // Loading State
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(async () => {
      // Grab all posts
      const data = await getPosts();
      // Update Posts state
      setPosts(data.data.posts);
      // Update Loading state
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <section className='card'>
      <h1 className='title'>Latest Posts</h1>
      {loading && (
        <i className='fa-solid fa-spinner animate-spin text-4xl text-center block'></i>
      )}
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
