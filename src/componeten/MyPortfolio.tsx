import { FaBitcoin } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
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

function MyPortfolio() {
    const [portfolioItems, setPortfolioItems] = useState<CoinData[]>([]);

    useEffect(() => {
        const storedPortfolio = localStorage.getItem('favorites');
        if (storedPortfolio) {
            setPortfolioItems(JSON.parse(storedPortfolio));
        }
    }, [portfolioItems]);

    const removeFromFavorites = (symbol: string) => {
        const updatedItems = portfolioItems.filter(item => item.symbol !== symbol);
        setPortfolioItems(updatedItems);
        localStorage.setItem('favorites', JSON.stringify(updatedItems));

      
    };

    return (
        <div className="myportfolio">
            <h2>My Portfolio</h2>
            {portfolioItems.map((item, index) => (
                <div className="favorite" key={index}>
                    <div className="favorite-icon">
                        <FaBitcoin className="coin-portfolio" />
                    </div>
                    <div className="favortie-titel">
                        <h2>{item.name}</h2>
                        <p>{item.symbol}</p>
                    </div>
                    <div className="favorite-prijs">
                        <MdDelete className="favorite-prijs-icon" onClick={() => removeFromFavorites(item.symbol)} />
                        <p>{item.percent_change_1h}%</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MyPortfolio;
