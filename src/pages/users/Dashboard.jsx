import { useContext, useEffect, useState } from 'react';
import { deletePost, getUserPosts } from '../../Controllers/postsController';
import { UserContext } from '../../Contexts/UserContext';
import Post from '../../Components/Post';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  // Use User Contest
  const { user, setUser } = useContext(UserContext);

  // Loading State
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(async () => {
      // Grab user's posts
      const { userPosts, email } = await getUserPosts();
      // Update User State
      setUser({ email, posts: userPosts });
      // Remove the loading
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <section className='card'>
      <p>{user.email}</p>
      <h1 className='title'>User Dashboard</h1>

      {loading && (
        <i className='fa-solid fa-spinner animate-spin text-4xl text-center block'></i>
      )}

      {user.posts &&
        user.posts.map((post) => (
          <div key={post._id}>
            <Post post={post}>
              <div className='flex items-center gap-2'>
                <Link
                  className='fa-solid fa-pen-to-square nav-link text-green-500 hover:bg-green-200'
                  title='update'
                  to='/update'
                ></Link>
                <button
                  className='fa-solid fa-trash-can nav-link text-red-500 hover:bg-red-200'
                  title='Delete'
                  onClick={() => deletePost(post._id)}
                ></button>
              </div>
            </Post>
          </div>
        ))}
    </section>
  );
};

export default Dashboard;
