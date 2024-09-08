import { useContext, useEffect } from 'react';
import { getUserPosts } from '../../Controllers/postsController';
import { UserContext } from '../../contexts/UserContext';
import Post from '../../Components/Post';

const Dashboard = () => {
  // Use User Contest
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    setTimeout(async () => {
      // Grab user's posts
      const { userPosts, email } = await getUserPosts();
      // Update User State
      setUser({ email, posts: userPosts });
    }, 1000);
  }, []);
  console.log(user);

  return (
    <section className='card'>
      <p>{user.email}</p>
      <h1 className='title'>User Dashboard</h1>
      {user.posts &&
        user.posts.map((post) => (
          <div key={post._id}>
            <Post post={post}></Post>
          </div>
        ))}
    </section>
  );
};

export default Dashboard;
