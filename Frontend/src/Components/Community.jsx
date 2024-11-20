import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MDEditor from '@uiw/react-md-editor';
import img2 from '../Images/img2.png';


const Community = () => {
  const [community, setCommunity] = useState([]);
  const [newCommentContent, setNewCommentContent] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCommunity();
  }, []);

  const fetchCommunity = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/community/getall`);
      setCommunity(response.data);
    } catch (err) {
      console.error('Error fetching community posts:', err);
      setError('Failed to fetch community posts.');
    }
  };

  const handleLike = async (id) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/community/posts/${id}/like`);
      setCommunity(community.map(post => post._id === id ? response.data : post));
    } catch (err) {
      console.error('Error liking post:', err);
      setError('Failed to like post.');
    }
  };

  const handleCommentSubmit = async (id) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/community/posts/${id}/comment`, { content: newCommentContent[id] });
      setCommunity(community.map(post => post._id === id ? response.data : post));
      setNewCommentContent({ ...newCommentContent, [id]: '' });
    } catch (err) {
      console.error('Error commenting on post:', err);
      setError('');
    }
  };

  const displayData = () => {
    return (
      <div className="container mb-4">
        <div className='row gap-y-4'>
        {community.map((post) => (
          <div className="col-md-8 mx-auto" key={post._id}>
            <div className="card  shadow-lg rounded-lg">
              <div>
                <img className="img-fluid mx-auto w-100 rounded" src={`${import.meta.env.VITE_API_URL}` + post.image} alt="" />
              </div>
              <div className='p-3'>
                <h1 className=" text-3xl font-semibold mb-3 text-center">{post.title}</h1>
                <p className="text-gray-500 text-sm ">{new Date(post.date).toLocaleDateString()}</p>
                <MDEditor.Markdown className="mt-3" source={post.details} style={{ whiteSpace: 'pre-wrap' }} />
              </div>
              <div className="p-3">
                <button className="   rounded likebtn" onClick={() => handleLike(post._id)}>  <svg class="icon" width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path></svg>  {post.likes}</button>
              </div>
              <div className="p-3">
                <textarea
                  className="w-full p-2 border rounded"
                  value={newCommentContent[post._id] || ''}
                  onChange={(e) => setNewCommentContent({ ...newCommentContent, [post._id]: e.target.value })}
                  placeholder="Write a comment..."
                  
                />
                <button className="  px-3 p-2 rounded " onClick={() => handleCommentSubmit(post._id)}>Comment</button>
              </div>
              <div className="p-3">
                {post.comments.map((comment, index) => (
                  <p key={index} className="  rounded mb-2 d-flex gap-3 p-2 "><svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#5f6368"><path d="M222-255q63-44 125-67.5T480-346q71 0 133.5 23.5T739-255q44-54 62.5-109T820-480q0-145-97.5-242.5T480-820q-145 0-242.5 97.5T140-480q0 61 19 116t63 109Zm257.81-195q-57.81 0-97.31-39.69-39.5-39.68-39.5-97.5 0-57.81 39.69-97.31 39.68-39.5 97.5-39.5 57.81 0 97.31 39.69 39.5 39.68 39.5 97.5 0 57.81-39.69 97.31-39.68 39.5-97.5 39.5Zm.66 370Q398-80 325-111.5t-127.5-86q-54.5-54.5-86-127.27Q80-397.53 80-480.27 80-563 111.5-635.5q31.5-72.5 86-127t127.27-86q72.76-31.5 155.5-31.5 82.73 0 155.23 31.5 72.5 31.5 127 86t86 127.03q31.5 72.53 31.5 155T848.5-325q-31.5 73-86 127.5t-127.03 86Q562.94-80 480.47-80Zm-.47-60q55 0 107.5-16T691-212q-51-36-104-55t-107-19q-54 0-107 19t-104 55q51 40 103.5 56T480-140Zm0-370q34 0 55.5-21.5T557-587q0-34-21.5-55.5T480-664q-34 0-55.5 21.5T403-587q0 34 21.5 55.5T480-510Zm0-77Zm0 374Z"/></svg> {comment.content}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
        </div>
        
      
      </div>
    );
  };

  return (
    <div>
      <header  style={{backgroundImage: `url(${img2})`,}} className=' mb-3'>
      <div className='py-5 '>
                <h1 data-aos="fade-left" className='text-center text-3xl font-semibold text-emerald-300'>Community</h1>
                <h1 data-aos="fade-right" className='text-center text-5xl font-bold text-white'>Welcome To Our Community</h1>

                <h1 data-aos="fade-up" className='text-center mt-3 text-white  text-xl'>
                Become part of our growing community of investors who trust Bullstocks.in for reliable market <br /> insights and expert guidance. Whether you’re looking for market updates, researching <br /> stocks, or seeking investment advice, we are here <br /> to support you every step of the way.
                </h1>
         </div>
      </header> 
      {error && <p className="text-red-500">{error}</p>}
      {displayData()}
    </div>
  );
};

export default Community;