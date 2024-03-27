import { useState, useEffect } from 'react';
import './App.css';

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

function App() {
  const [data, setData] = useState<CoinData[]>([]);

  useEffect(() => {
    // Functie om gegevens op te halen en in te stellen
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.coinlore.net/api/tickers/");
        const responseData = await response.json();
        const updatedData = responseData.data.map((item: any) => {
          const { id, ...rest } = item; // Verwijder het 'id' veld
          return rest;
        });
        setData(updatedData);
      } catch (err) {
        console.warn("Something went wrong.", err);
      }
    };

    // Roep fetchData aan bij het mounten van de component
    fetchData();

    // Gebruik setInterval om fetchData elke seconde aan te roepen
    const intervalId = setInterval(() => {
      fetchData();
    }, 1000);

    // Cleanup-functie om setInterval te stoppen bij het unmounten van de component
    return () => clearInterval(intervalId);
  }, []); // Lege array als tweede argument zorgt ervoor dat useEffect slechts één keer wordt uitgevoerd bij het mounten

  return (
    <>
      <div>
        <h1>Next.js Vite React App</h1>
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              <div>
                <p>Name: {item.name}</p>
                <p>Symbol: {item.symbol}</p>
                <p>Rank: {item.rank}</p>
                <p>Price USD: {item.price_usd}</p>
                <p>Percent Change 24h: {item.percent_change_24h}</p>
                {/* Voeg andere velden toe die je wilt weergeven */}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
