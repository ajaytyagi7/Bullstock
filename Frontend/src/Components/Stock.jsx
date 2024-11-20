import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Stock = () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-quart',
      delay: 0,
      duration: 750
    })
  
  },[])
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
    <div className='container-fluid Stock'>
      <div className='mt-5'>
        <h1 data-aos="fade-left" className='text-3xl text-emerald-400 text-center font-semibold'>Stocks</h1>
        <h1 data-aos="fade-right" className='text-5xl text-center font-bold mt-2'>Stocks And Chart</h1>
        <p data-aos="fade-up" className='text-center text-xl mt-3 mb-3'>Access real-time stock data and interactive charts to make informed decisions. Stay ahead with <br /> our comprehensive market analysis tools.</p>
      </div>
      <div className='Ticker'>
      <iframe id='st_175624f7fb4b477fb2de21861c44f6c7' frameBorder='0' scrolling='no' width='100%' height='100%' src='https://api.stockdio.com/visualization/financial/charts/v1/Ticker?app-key=18E77ABD509742F88A66EA1D1461CBF6&stockExchange=NSE&symbols=SBIN;LT;ICICIBANK;RELIANCE;HINDALCO&palette=Financial-Light&layoutType=13&onload=st_175624f7fb4b477fb2de21861c44f6c7'></iframe>

      </div>
      <div className="row Stock">
        <div className="col-md-7">
        <iframe
        id='st_ce3144b2bbd14b3ea7d34beff25a6bd9'
        frameBorder='0'
        scrolling='no'
        width='750'
        height='100%'
        src='https://api.stockdio.com/visualization/financial/charts/v1/PricesChangeBoard?app-key=18E77ABD509742F88A66EA1D1461CBF6&stockExchange=NSE&symbols=SBIN;LT;ICICIBANK;RELIANCE;HINDALCO&showLastPrice=true&showCurrency=true&palette=Financial-Light&title=Watch%20List&onload=st_ce3144b2bbd14b3ea7d34beff25a6bd9'
      ></iframe>
        </div>
        <div className="col-md-5">
        <iframe id='st_bf94c464d8ef490d94ce9906bbb3bb18'
         frameBorder='0' 
         scrolling='no' 
         width='500'
          height='100%'
         src='https://api.stockdio.com/visualization/financial/charts/v1/MarketOverview?app-key=18E77ABD509742F88A66EA1D1461CBF6&stockExchange=NSE&showCurrency=true&showHeader=true&palette=Financial-Light&onload=st_bf94c464d8ef490d94ce9906bbb3bb18'></iframe>

        <iframe id='st_0362acfb7b1f4edda6dc24a6c43e35f4' className='mt-3' frameBorder='0' scrolling='no' width='500' height='100%' src='https://api.stockdio.com/visualization/financial/charts/v1/StockOverview?app-key=18E77ABD509742F88A66EA1D1461CBF6&stockExchange=NSE&symbol=SBIN&palette=Financial-Light&showLogo=Title&onload=st_0362acfb7b1f4edda6dc24a6c43e35f4'></iframe>
        </div>
      </div>
    </div>
  );
};

export default Stock;