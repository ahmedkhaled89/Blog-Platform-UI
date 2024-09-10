import { useContext, useState } from 'react';
import { createPost } from '../../Controllers/postsController';
import Alert from '../../Components/Alert';
import { PostContext } from '../../Contexts/PostContext';
import { useNavigate } from 'react-router-dom';
const CreatePost = () => {
  // Navigate
  const navigate = useNavigate();
  // Posts state
  const { posts, setPosts } = useContext(PostContext);

  // Error State
  const [error, setError] = useState(null);

  // Form Data State
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      // Create new Post
      const data = await createPost(title, body);
      // Update post state
      setPosts([...posts, data.post]);
      // Navigate to Dashboard
      navigate('/dashboard');
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <section className='card'>
      <h1 className='title'>Create New Post</h1>
      <form onSubmit={handleCreate}>
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
        <button className='btn'>Create</button>
      </form>
      {error && <Alert msg={error} />}
    </section>
  );
};

export default CreatePost;
