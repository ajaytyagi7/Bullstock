import React from 'react'
import { useEffect } from 'react'   
import Ticker from './Ticker';
import img2 from '../images/img2.png'


const News = () => {
    useEffect(() => {
        if (typeof window.stockdio_events === "undefined") {
          window.stockdio_events = true;
          const stockdio_eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
          const stockdio_eventer = window[stockdio_eventMethod];
          const stockdio_messageEvent = stockdio_eventMethod === "attachEvent" ? "onmessage" : "message";
          stockdio_eventer(stockdio_messageEvent, (e) => {
            if (typeof e.data !== "undefined" && typeof e.data.method !== "undefined") {
              try {
                new Function(e.data.method)();
              } catch (error) {
                console.error("Error executing method:", error);
              }
            }
          }, false);
        }
      }, []);
  return (
    <div>
        <div>
            <Ticker/>
        </div>
        <div>
        <header  style={{backgroundImage: `url(${img2})`,}} className='contact-header text-white'>
        <div className='p-16'>
            <h1 className='text-2xl font-semibold text-center text-emerald-400 '>News</h1>
          <h1 className='text-center text-5xl font-bold'>Welcome to our Blogs</h1>
          <h1 className='text-center text-xl mt-3 font-semibold'>
           
Stay updated with the latest news and trends in finance. Our news section covers essential <br /> insights on investing and trading.
          </h1>
        </div>
      </header>
        </div>
       <iframe id='st_3f33393759e14d0eab32e20cc3c45dff' frameBorder='0' scrolling='no' width='100%' height='100%' src='https://api.stockdio.com/visualization/financial/charts/v1/EconomicNews?app-key=18E77ABD509742F88A66EA1D1461CBF6&language=Hindi&maxCountryNews=50&imageWidth=200&maxItems=50&palette=Financial-Light&onload=st_3f33393759e14d0eab32e20cc3c45dff'></iframe> 
    </div>
  )
}

export default News