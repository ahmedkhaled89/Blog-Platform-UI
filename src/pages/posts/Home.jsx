import { useEffect } from 'react';
import { getPosts } from '../../Controllers/postsController';

const Home = () => {
  useEffect(() => {
    setTimeout(async () => {
      const data = await getPosts();
      console.log(data.data);
    }, 3000);
  }, []);
  return (
    <section className='card'>
      <h1 className='title'>Latest Posts</h1>

      <div>posts</div>
    </section>
  );
};

export default Home;
