import React from 'react'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react'
import img4 from '../Images/img4.png'
import img5 from '../Images/img5.png'
import img6 from '../Images/img6.png'

const Service = () => {
    useEffect(() => {
        AOS.init({
          easing: 'ease-out-quart',
          delay: 0,
          duration: 750
        })
      
      },[])
  return (
    <div className='container-fluid'>
        
        <div className='py-3'>
                <h1  data-aos="fade-right" className='text-center text-3xl font-semibold text-emerald-300'>Our Service</h1>
                <h1  data-aos="fade-left" className='text-center text-5xl font-bold '>We Services provided best offer</h1>

                <h1  data-aos="fade-up" className='text-center mt-3  text-xl'>
               
Explore our comprehensive services, including personalized investing, expert trading, and more, tailored to meet <br /> your unique financial needs.
                </h1>
         </div>
        
        <div className=' mt-5'>
            <div className='grid  sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-3  gap-4'>
                <div  data-aos="fade-right" className='card shadow border-emerald-400   mb-3  '>
                    <div>
                <img className='img-fluid' src={img4} alt="" />

                    </div>
                    <div className="card-body">
                        <h1 className='text-center text-3xl font-semibold '>Real-Time Updates</h1>
                        <h1 className='mt-3 text-lg text-center'>Stay updated with live market data, stock prices, and economic news to make timely investment decisions.</h1>
                        <button className='bg-emerald-400 w-100 rounded-2xl p-1 mt-3 font-semibold text-white'>Learn More</button>
                    </div>
                </div>
                <div data-aos="fade-up" className='card shadow border-emerald-400  mb-3  '>
                    <div>
                    <img className='img-fluid'  src={img5} alt="" />

                    </div>
                    <div className="card-body">
                        <h1 className='text-center text-3xl font-semibold '>Expert Analysis</h1>
                        <h1 className='mt-3 text-lg text-center'>Expert analysis applies specialized knowledge to assess, interpret data, solve problems, and provide informed solutions. </h1>
                        <button className='bg-emerald-400 w-100 rounded-2xl p-1 mt-3 font-semibold text-white'>Learn More</button>
                        
                    </div>
                </div>
                <div  data-aos="fade-left" className='card shadow border-emerald-400  mb-3  '>
                    <div>
                    <img className='img-fluid'  src={img6} alt="" />

                    </div>
                    <div className="card-body">
                        <h1 className='text-center text-3xl font-semibold '>Investing Strategies</h1>
                        <h1 className='mt-3 text-lg text-center'>Investing strategies involve diversifying assets, managing risk, and selecting opportunities for long-term growth and returns. </h1>
                        <button className='bg-emerald-400 w-100 rounded-2xl p-1 mt-3 font-semibold text-white'>Learn More</button>

                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Service