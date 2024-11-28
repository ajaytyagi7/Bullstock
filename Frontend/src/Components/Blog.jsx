import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';
import img2 from '../Images/img2.png';

const Blog = () => {
  const [blogList, setBlogList] = useState([]);
  const [selectedcatagory, setselectedcatagory] = useState('All');

  const handleCatagoryChange = (catagory) => {
    setselectedcatagory(catagory);
  };

  const filteredBlogs = selectedcatagory === 'All'
    ? blogList
    : blogList.filter(blog => blog.catagory === selectedcatagory);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/blog/getall`);
        setBlogList(response.data);
      } catch (error) {
        console.error('Failed to fetch blog data:', error);
      }
    };

    fetchBlogData();
  }, []);

  useEffect(() => {
    AOS.init({
      easing: 'ease-out-quart',
      delay: 0,
      duration: 750
    })
  
  },[])

  return (
    <div className='overflow-hidden'>
      <header style={{backgroundImage: `url(${img2})`,}} className='text-white'>
      <div className='py-5 '>
                <h1 data-aos="fade-left" className='text-center text-3xl font-semibold text-emerald-300'>Our Blog</h1>
                <h1 data-aos="fade-right" className='text-center text-5xl font-bold '>Welcome To Our Blog</h1>

                <h1 data-aos="fade-up" className='text-center mt-3  text-xl'>
                Stay informed with our blog, featuring expert insights on investing, trading, and financial strategies <br /> to empower your financial journey. 
                </h1>
         </div>
      </header>
      <div>
        <div className="container">
          <div className="row">
            <div className='d-flex justify-center gap-10 py-3 category'>
              <h1 className={`text-xl font-semibold cursor-pointer ${selectedcatagory === 'All' ? 'text-emerald-400 underline' : ''}`} onClick={() => handleCatagoryChange('All')}>All</h1>
              <h1 className={`text-xl font-semibold cursor-pointer ${selectedcatagory === 'Stock Analysis' ? 'text-emerald-400  underline' : ''}`} onClick={() => handleCatagoryChange('Stock Analysis')}>Stock Analysis</h1>
              <h1 className={`text-xl font-semibold cursor-pointer ${selectedcatagory === 'Trading Analysis' ? 'text-emerald-400  underline' : ''}`} onClick={() => handleCatagoryChange('Trading Analysis')}>Trading Analysis</h1>
            </div>
            {
              filteredBlogs.map((blog) => {
                return (
                  <div className='col-md-4 mt-3' key={blog.id}>
                    <div data-aos="fade-left" className="card mb-3 border-emerald-400">
                      <div>
                        <img className='img-fluid w-100' src={'http://localhost:5013/' + blog.image} alt='' />
                      </div>
                      <div className="card-body">
                        <h1 className='text-lg font-semibold'>{blog.catagory}</h1>
                        <h1 className='text-xl font-semibold'>{blog.title}</h1>
                        <h1>{blog.date}</h1>
                        <h1 className='mt-2 text-lg'>{blog.description}</h1>
                       <Link to={'/BlogDetails/'+ blog._id}> <button className='text-white font-semibold bg-emerald-400 w-100 rounded-full p-1 mt-3'>Read More</button></Link>
                      </div>
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;