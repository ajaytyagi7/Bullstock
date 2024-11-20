import React from 'react'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react'

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
                <img className='img-fluid' src="https://themewagon.github.io/stocker/img/service-3.jpg" alt="" />

                    </div>
                    <div className="card-body">
                        <h1 className='text-center text-3xl font-semibold '>Real-Time Updates</h1>
                        <h1 className='mt-3 text-lg text-center'>Stay updated with live market data, stock prices, and economic news to make timely investment decisions.</h1>
                        <button className='bg-emerald-400 w-100 rounded-2xl p-1 mt-3 font-semibold text-white'>Learn More</button>
                    </div>
                </div>
                <div data-aos="fade-up" className='card shadow border-emerald-400  mb-3  '>
                    <div>
                    <img className='img-fluid'  src="https://themewagon.github.io/stocker/img/service-1.jpg" alt="" />

                    </div>
                    <div className="card-body">
                        <h1 className='text-center text-3xl font-semibold '>Expert Analysis</h1>
                        <h1 className='mt-3 text-lg text-center'>Gain valuable insights from our team of financial experts who provide in-depth analysis and predictions on market trends and stock movements. </h1>
                        <button className='bg-emerald-400 w-100 rounded-2xl p-1 mt-3 font-semibold text-white'>Learn More</button>
                        
                    </div>
                </div>
                <div  data-aos="fade-left" className='card shadow border-emerald-400  mb-3  '>
                    <div>
                    <img className='img-fluid'  src="https://themewagon.github.io/stocker/img/service-2.jpg" alt="" />

                    </div>
                    <div className="card-body">
                        <h1 className='text-center text-3xl font-semibold '>Investing Strategies</h1>
                        <h1 className='mt-3 text-lg text-center'>Learn proven strategies and tips to build and manage your investment portfolio effectively. </h1>
                        <button className='bg-emerald-400 w-100 rounded-2xl p-1 mt-3 font-semibold text-white'>Learn More</button>

                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Service