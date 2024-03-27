import React from 'react';
import { FaBitcoin} from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";

interface CryptoDetailsProps {
  cryptoData: {
    symbol: string;
    name: string;
    price_usd: string;
    percent_change_24h: string;
    percent_change_1h: string;
    percent_change_7d: string;
    // Voeg meer details toe indien nodig
  };
}

const CryptoDetails: React.FC<CryptoDetailsProps> = ({ cryptoData }) => {
  return (
    <>
      <div className="favo">
        {/* card */}
        <div className="top crypto-details">
          <div className="top-titel">
            <FaBitcoin className="crypto-top" />
            <div className="titel">
              <h2>{cryptoData.name}</h2>
              {/* <p>{item.symbol}</p> */}
            </div>
            <FaArrowLeftLong
              className="top_arrow"
              style={{
                transform: `rotate(${parseFloat(cryptoData.percent_change_1h) < 0 ? '-130deg' : '130deg'})`,
                backgroundColor: parseFloat(cryptoData.percent_change_1h) > 0 ? '#1DD6B4' : '#F46D22'
              }}
            />
          </div>
          <div className="prijs">
            <h2>${cryptoData.price_usd}</h2>
            <p style={{ color: parseFloat(cryptoData.percent_change_1h) < 0 ? '#F46D22' : '#1DD6B4' }}>
              {cryptoData.percent_change_1h}%
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CryptoDetails;
