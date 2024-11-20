import React from 'react'
import { useEffect } from 'react'

const Ticker = () => {
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
    <div className='Ticker'>
        <iframe id='st_90b1e6c94b3c47b7ac79d802cb2b5c38' frameBorder='0' scrolling='no' width='100%' height='100%' src='https://api.stockdio.com/visualization/financial/charts/v1/Ticker?app-key=18E77ABD509742F88A66EA1D1461CBF6&stockExchange=NSE&symbols=SBIN;LT;ICICIBANK;RELIANCE;HINDALCO&palette=Financial-Light&layoutType=8&onload=st_90b1e6c94b3c47b7ac79d802cb2b5c38'></iframe>
    </div>
  )
}

export default Ticker