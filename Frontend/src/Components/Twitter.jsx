import React from 'react'
import {Tweet,Timeline} from 'react-twitter-widgets'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const Twitter = () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-quart',
      delay: 0,
      duration: 750
    })
  
  },[])
  return (
    <div className='mb-5'>
      <div className='mb-3  p-5'>
        <h1 data-aos="fade-left"  className='text-center text-3xl font-semibold text-emerald-400 '>Twitter</h1>
      <h1 data-aos="fade-right"  className='text-center text-5xl font-bold'>Bullstock Twitter Post</h1>
      <p data-aos="fade-up"  className='text-xl text-center mt-3'>Follow us on Twitter for the latest updates, market insights, and tips on investing and trading! <br /> Join the conversation today!</p>

      </div>
     <div className='align-middle gap-4 d-flex justify-center Twitter'>
      
         {/* <Tweet option={{align:'center',theme:'dark'}} tweetId='1633521736196190209'/> */}
      <Tweet option={{width:'200'}} /> 
      <Timeline options={{width:'750',align:'center',justify:'center'}} dataSource={{
        sourceType:'profile',
        screenName:'Bullstocktrends',
      }}/>
     </div>


    </div>
  )
}

export default Twitter