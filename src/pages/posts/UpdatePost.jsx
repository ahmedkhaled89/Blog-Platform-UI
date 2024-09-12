import { useContext, useState } from 'react';
import Alert from '../../Components/Alert';
import { useLocation, useNavigate } from 'react-router-dom';
import { PostContext } from '../../Contexts/PostContext';
import { updatePost } from '../../Controllers/postsController';

const UpdatePost = () => {
  // Post Context
  const { posts, setPosts } = useContext(PostContext);

  // Navigate
  const navigate = useNavigate();

  const { state } = useLocation();

  // Error State
  const [error, setError] = useState(null);

  // Form Data status
  const [title, setTitle] = useState(state.title);
  const [body, setBody] = useState(state.body);

  // Handel Update
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      // Update Post
      const data = await updatePost(state._id, title, body);
      // Update posts state
      setPosts([...posts, data.post]);
      // Navigate to dashboard
      navigate('/dashboard');
    } catch (error) {
      setError(error);
    }
  };

  return (
    <section className='card'>
      <h1 className='title'>Update Your Post</h1>
      <form onSubmit={(e) => handleUpdate(e)}>
        <input
          type='text'
          placeholder='Post Title'
          className='input'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
        <textarea
          rows='6'
          placeholder='Post Content'
          className='input'
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button className='btn'>Update</button>
      </form>
      {error && <Alert msg={error.message} />}
    </section>
  );
};

export default UpdatePost;
