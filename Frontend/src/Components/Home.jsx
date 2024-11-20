import React from 'react'
import Ticker from './Ticker'
import Stock from './Stock'
import Offer from './Offer'
import Service from './Service'
import Blog from './Blog'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react'
import Twitter from './Twitter'
import Youtube from './Youtube'
import { Link } from 'react-router-dom'
import Journey from './Journey'
import img3 from '../Images/img3.png'

const Home = () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-quart',
      delay: 0,
      duration: 750
    })
  
  },[])
  return (
    <div className='overflow-hidden'>
      <Ticker />
        <header style={{backgroundImage: `url(${img3})`,}} className='header text-white'>
            <div className='py-20'>
                <h1 data-aos="fade-left" className='text-center text-3xl font-semibold text-emerald-300'>Welcome to BullStock</h1>
                <h1 data-aos="fade-right" className='text-center text-6xl font-bold '>Invest Your Money With Higher <br /> Return</h1>

                <h1 data-aos="fade-up" className='text-center text-xl  mt-3 '>
                Welcome to our platform! Explore a world of investing and trading opportunities designed to empower <br /> your financial success.
                </h1>
            </div>
        </header>
        <Stock />
        <Youtube/>
        <Journey/>
        <Blog />
        <Offer />
        <Service />
        
        <div class="h-80 w-screen bg-black flex justify-center items-center">
          <div class="relative inline-flex  group">
              <div
                  class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
              </div>
              <Link to={'/Community'} title="Get quote now"
                  class="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  role="button">Join Community 
              </Link>
          </div>
        </div>

        <Twitter/>
        
    </div>
  )
}

export default Home