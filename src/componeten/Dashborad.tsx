
// import { FaArrowLeftLong } from "react-icons/fa6";
import { FaBitcoin } from "react-icons/fa6";
import { useState, useEffect } from 'react';
import CryptoDetails from './CryptoDetails';
import UserInfo from './UserInfo';
import SideBar from "./SideBar";
import Favo from "./Favo";
import { FaSearch } from "react-icons/fa";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
// import { FaRegUser } from "react-icons/fa";
import { LiaEthereum } from "react-icons/lia";
import { FaUser } from "react-icons/fa6";
import MyPortfolio from'./MyPortfolio'
import { MdFavorite } from "react-icons/md";
import '../assets/style/style.css';

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
  function Dashboard() {
    const [data, setData] = useState<CoinData[]>([]);
    const [visibleItems, setVisibleItems] = useState<number>(7);
    const [selectedCrypto, setSelectedCrypto] = useState<CoinData | null>(null);
    const [searchText, setSearchText] = useState<string>("");
    const [favorites, setFavorites] = useState<CoinData[]>([]);
  
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
  
    const showMoreItems = () => {
      setVisibleItems(prevVisibleItems => prevVisibleItems + 7);
    };
    const showLessItems = () => {
        setVisibleItems(prevVisibleItems => prevVisibleItems - 7);
      };
      const handleCryptoClick = (crypto: CoinData) => {
        setSelectedCrypto(crypto);
      };
      const handleSearchChange = (text: string) => {
        setSearchText(text);
      };
      const filteredData = data.filter(item =>
        item.symbol.toLowerCase().includes(searchText.toLowerCase())
      );
      const addToFavorites = (item: CoinData) => {
        if (!favorites.find(favorite => favorite.symbol === item.symbol)) {
          setFavorites(prevFavorites => [...prevFavorites, item]);
          localStorage.setItem('favorites', JSON.stringify([...favorites, item]));
        }
      };
       
      useEffect(() => {
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
          setFavorites(JSON.parse(storedFavorites));
        }
      }, []);  
    return(
        <>
         <header data-testid="dash-component">
           <nav>
            <div className="logo">
                <a href="/"><LiaEthereum  className="logo-icon"/></a>
            </div>
            <div className="menu-bar">
                <h2>Dashboard</h2>
                 <div className="search">
                     <FaSearch  className="search-icon"/>
                    <input type="text" onChange={(e) => handleSearchChange(e.target.value)} placeholder="Search"></input>
                 </div>
                 <div className="acount">
                    <ul>
                        <li><MdOutlineLocalPostOffice  className="acount-icon"/></li>
                        <li><FaRegBell className="acount-icon"/></li>
                        <li><FaUser  className="acount-icon user"/></li>
                    </ul>
                 </div>
            </div>

           </nav>

        </header>

        <div className="main">
            <SideBar />
            {/* Het begint Dashboard */}
            <div className="dashborad">
               <UserInfo />  
               <Favo />
        <div className="crypto">
            {filteredData.slice(0, visibleItems).map((item, index) => (
            <div className="crypto-ithems" key={index} onClick={() => handleCryptoClick(item)}>
              <FaBitcoin className="crypto-coin" />
              <div className="crypto-info"><h2>{item.symbol}</h2></div>
              <div className="crypto-info"><p>${item.price_usd}</p></div>
              <div className="crypto-info"><p style={{ color: parseFloat(item.percent_change_24h) < 0 ? '#F46D22' : '#1DD6B4' }}>{item.percent_change_24h}%</p></div>
              <div className="crypto-info"><p style={{ color: parseFloat(item.percent_change_1h) < 0 ? '#F46D22' : '#1DD6B4' }}>{item.percent_change_1h}%</p></div>
              <div className="crypto-info"><p style={{ color: parseFloat(item.percent_change_7d) < 0 ? '#F46D22' : '#1DD6B4' }}>{item.percent_change_7d}%</p></div>
              <MdFavorite  className="fav-ico"  onClick={() => addToFavorites(item)}/>
            </div> 
            
          ))}
           {selectedCrypto && <CryptoDetails cryptoData={selectedCrypto} />}
           <MyPortfolio />
          <div className="buttons">
          {visibleItems < data.length && (
          <button className="more" onClick={showMoreItems}>Load More</button>
        )}
        {data.length > 7 && visibleItems < data.length && (
        <button className="more" onClick={showLessItems}>
          Load Less
        </button>
      )}
       
          </div>
        </div>
             
    </div>


        {/* Hier  is de Eind van dashboard. */}
        </div>
        
        </>
    )
}
export default Dashboard;