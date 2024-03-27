import { FaBitcoin } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useState, useEffect } from 'react';

interface CoinData {
    symbol: string;
    name: string;
    nameid: string;
    rank: number;
    price_usd: string;
    percent_change_24h: string;
    percent_change_1h: string;
    percent_change_7d: string;
    price_btc: string;
    market_cap_usd: string;
    volume24: number;
    volume24a: number;
    csupply: string;
    tsupply: string;
    msupply: string;
  }
function Favo(){
    const [data, setData] = useState<CoinData[]>([]);
    const [visibleItems] = useState<number>(4);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch("https://api.coinlore.net/api/tickers/");
            const responseData = await response.json();
            const updatedData = responseData.data.map((item: any) => {
              const { id, ...rest } = item;
              return rest;
            });
            setData(updatedData);
          } catch (err) {
            console.warn("Something went wrong.", err);
          }
        };
        fetchData();
        const intervalId = setInterval(() => {
          fetchData();
        }, 1000);
    
        return () => clearInterval(intervalId);
      }, []);
    return(
        <>
        <div className="favo" data-testid="favo-component">


            {/* card */}
        {data.slice(0, visibleItems).map((item, index) => (
            <div className="top" key={index}>

                <div className="top-titel">

                    <FaBitcoin className="crypto-top" />
                    <div className="titel">
                    <h2>{item.name}</h2>
                    <p>{item.symbol}</p>
                    </div>
                    <FaArrowLeftLong className="top_arrow" 
                    style={{
                        transform: `rotate(${parseFloat(item.percent_change_1h) < 0 ? '-130deg' : '130deg'})`,
                        backgroundColor: parseFloat(item.percent_change_1h) > 0 ? '#1DD6B4' : '#F46D22'
                      }}/>
                </div>
                <div className="prijs">
                    <h2>{item.price_usd}</h2>
                    <p style={{color: parseFloat(item.percent_change_1h) < 0 ? '#F46D22' : '#1DD6B4'}}>{item.percent_change_1h}%</p>
                </div>

            </div>
         ))}
             {/* card */}
           
            
            
            






        </div> 
        </>
    )
}
export default Favo;

