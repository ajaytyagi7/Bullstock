import React from 'react'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const Offer = () => {
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
                <h1 data-aos="fade-left" className='text-center text-3xl font-semibold text-emerald-300'>Offer</h1>
                <h1 data-aos="fade-right"  className='text-center text-5xl font-bold '>Benefits We offer</h1>

                <h1 data-aos="fade-up" className='text-center mt-3  text-xl'>
                Discover a wide range of financial services, including investing, trading, and more, designed <br /> to help you achieve your financial goals.
                </h1>
         </div>
        
        <div className=' mt-5'>
            <div className='grid  sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-2  gap-4'>
                <div data-aos="fade-right" className='card shadow border-emerald-400   mb-3  '>
                    <div className="card-body">
                    <svg className='mx-auto mb-3' xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#50C878"><path d="M483.46-105.87q-77.53 0-146.45-29.63-68.92-29.63-120.12-80.61-51.19-50.98-81.11-119.52-29.91-68.54-29.91-146.37t29.91-145.37q29.92-67.54 81.11-118.02 51.2-50.48 120.15-79.89Q406-854.7 483.57-854.7q80.56 0 152.63 34.44 72.06 34.43 126.32 94.3v-99.78h66.22V-607H608.43v-67.35h93.13q-43.02-46.06-99.05-73.31-56.03-27.25-118.94-27.25-123.31 0-210.61 83.98-87.31 83.99-87.31 205.83 0 124.84 86.52 212.43 86.51 87.58 211.4 87.58 122.17 0 206.69-86.5 84.51-86.5 85.22-209.41h79.22q0 156.22-107.96 265.67-107.96 109.46-263.28 109.46Zm118.71-207.74-154-152V-683h66.22v189l135.87 132.3-48.09 48.09Z"/></svg>
                        <h1 className='text-center text-2xl font-semibold '>Real-Time Updates</h1>
                        <h1 className='mt-3 text-lg'>Stay updated with live market data, stock prices, and economic news to make timely investment decisions.</h1>
                        <button className='bg-emerald-400 w-100 rounded-2xl p-1 mt-3 font-semibold text-white'>Learn More</button>
                    </div>
                </div>
                <div data-aos="fade-right" className='card shadow border-emerald-400  mb-3  '>
                    <div className="card-body">
                    <svg className='mx-auto mb-3' xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#50C878"><path d="M110.39-110.39v-89.57l77.52-77.52v167.09h-77.52Zm165.57 0v-250.13l77.52-77.52v327.65h-77.52Zm165.56 0v-327.65l77.52 77.95v249.7h-77.52Zm165.57 0v-250.83l77.52-76.96v327.79h-77.52Zm165.56 0v-411.83l76.96-76.96v488.79h-76.96ZM110.39-335.65v-112.7L400-735.96l160 160 289.61-290.61v112.14L560-463.26l-160-160-289.61 287.61Z"/></svg>
                        <h1 className='text-center text-2xl font-semibold '>Expert Analysis</h1>
                        <h1 className='mt-3 text-lg'>Gain valuable insights from our team of financial experts who provide in-depth analysis and predictions on market trends and stock movements. </h1>
                        <button className='bg-emerald-400 w-100 rounded-2xl p-1 mt-3 font-semibold text-white'>Learn More</button>
                        
                    </div>
                </div>
                <div data-aos="fade-left" className='card shadow border-emerald-400  mb-3  '>
                    <div className="card-body">
                    <svg className='mx-auto mb-3' xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#50C878"><path d="m86.74-413.7-63.7-47.87 207.7-311.69 122.17 129.04 166.7-257.26L649.7-731.87l137.34-205.09 63.83 47.44-195.65 289.69L527.26-766.3 366-518.48 242.13-648.65 86.74-413.7ZM596-216.04q44.61 0 76.28-30.68 31.68-30.67 31.68-75.28 0-45.04-31.18-76.22-31.17-31.17-76.78-31.17-44.04 0-74.72 31.67-30.67 31.68-30.67 75.72 0 44.61 30.67 75.28 30.68 30.68 74.72 30.68ZM798.13-65.87 697.44-166.56q-22 13.87-47.5 21.8-25.5 7.94-53.94 7.94-77.52 0-131.35-53.83-53.82-53.83-53.82-131.35t53.82-132.35q53.83-54.82 131.35-54.82 78.52 0 132.85 54.32 54.33 54.33 54.33 132.85 0 28.44-7.94 53.37-7.93 24.93-22.24 46.93l100.7 100.27-55.57 55.56Z"/></svg>
                        <h1 className='text-center text-2xl font-semibold '>Investing Strategies</h1>
                        <h1 className='mt-3 text-lg'> Learn proven strategies and tips to build and manage your investment portfolio effectively. </h1>
                        <button className='bg-emerald-400 w-100 rounded-2xl p-1 mt-3 font-semibold text-white'>Learn More</button>

                    </div>
                </div>
                <div data-aos="fade-left" className='card shadow border-emerald-400  mb-3  '>
                    <div className="card-body">
                    <svg className='mx-auto mb-3' xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#50C878"><path d="M224.26-54q-52.32 0-88.55-36.23t-36.23-88.82v-138.86h133.78v-571.7l63.19 62.26 62.5-62.26 62.5 62.26 62.49-62.26 62.5 62.26 62.7-62.26 62.58 62.26 62.58-62.26 62.27 62.26 63.95-62.26v710.83q0 52.32-36.39 88.55Q787.73-54 735.74-54H224.26Zm511.76-79.78q19.72 0 32.22-12.53 12.5-12.54 12.5-32.59v-589.23H312.48v450.22h378.26v139.13q0 20 12.78 32.5t32.5 12.5ZM365.48-606.74v-60h229.26v60H365.48Zm0 134v-60h229.26v60H365.48Zm322.26-134q-12 0-21-9t-9-21q0-12 9-21t21-9q12 0 21 9t9 21q0 12-9 21t-21 9Zm0 129q-12 0-21-9t-9-21q0-12 9-21t21-9q12 0 21 9t9 21q0 12-9 21t-21 9ZM223.26-133.78h388.26v-104.35H179.26v59.35q0 20 12.65 32.5t31.35 12.5Zm-44 0v-104.35 104.35Z"/></svg>
                        <h1 className='text-center text-2xl font-semibold '>Trading Analysis</h1>
                        <h1 className='mt-3 text-lg'> Learn proven strategies and tips to build and manage your investment portfolio effectively. </h1>
                        <button className='bg-emerald-400 w-100 rounded-2xl p-1 mt-3 font-semibold text-white'>Learn More</button>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Offer