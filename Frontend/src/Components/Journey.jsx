import React from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const Journey = () => {
  const googleSearchUrl = (query) => `https://www.google.com/search?q=${encodeURIComponent(query)}`;

  useEffect(() => {
    AOS.init({
      easing: 'ease-out-quart',
      delay: 0,
      duration: 750
    })
  
  },[])

  return (
    <div className='mt-3 mb-3'>
      <h1 data-aos="fade-left" className='text-center text-3xl font-semibold text-emerald-400'>Journey</h1>
      <h1 data-aos="fade-right" className='text-5xl text-center font-bold mt-2'>Start Your Journey Today</h1>
      <p data-aos="fade-up" className='text-center mt-3 text-xl'>
      Begin your financial journey with us today. Explore investing, trading, and more to achieve <br /> your financial dreams and goals.
      </p>
      <div className='col-md-10 mx-auto mt-5'>
        <div className="card shadow-xl p-3">
          <div className="card-body ">
            <h1 className='text-2xl font-bold'>Discover related topics</h1>
            <hr className='mt-3' />
            <a href={googleSearchUrl('Trading Course for Beginners')} target="_blank" rel="noopener noreferrer">
              <h1 className='text-xl font-semibold mt-4  group relative w-max'>
                <span>Trading Course for Beginners</span>
              <span class="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-emerald-500 group-hover:w-full"></span>
              </h1>
            </a>
            <hr className='mt-3' />
            <a href={googleSearchUrl('Best Stock Fundamental Analysis Course')} target="_blank" rel="noopener noreferrer">
              <h1 className='text-xl font-semibold mt-4  group relative w-max'><span>Best Stock Fundamental Analysis Course</span>
              <span class="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-emerald-500 group-hover:w-full"></span>
              </h1>
            </a>
            <hr className='mt-3' />
            <a href={googleSearchUrl('Trading Tips')} target="_blank" rel="noopener noreferrer">
              <h1 className='text-xl font-semibold mt-4  group relative w-max'><span>Trading Tips</span>
              <span class="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-emerald-500 group-hover:w-full"></span>

              </h1>
            </a>
            <hr className='mt-3' />
            <a href={googleSearchUrl('Data Analysis of Indian Stock Market')} target="_blank" rel="noopener noreferrer">
              <h1 className='text-xl font-semibold mt-4  group relative w-max'><span>Data Analysis of Indian Stock Market</span>
              <span class="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-emerald-500 group-hover:w-full"></span>
              
              </h1>
            </a>
            <hr className='mt-3' />
            <a href={googleSearchUrl('Website for Stock Analysis')} target="_blank" rel="noopener noreferrer">
              <h1 className='text-xl font-semibold mt-4  group relative w-max'><span>Website for Stock Analysis</span>
              <span class="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-emerald-500 group-hover:w-full"></span>
              
              </h1>
            </a>
            <hr className='mt-3' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;