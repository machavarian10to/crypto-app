import Coin from './Coin'
import '../styles/Table.css'

export default function Table({ filter }) {
    return (
        <section>  
            <div className="coin-table">
                <ul className="header">
                    <li>#</li>
                    <li>Name</li>
                    <div></div>
                    <li>Price</li>
                    <li>1h%</li>
                    <li>24h%</li>
                    <li>7d%</li>
                    <li>24h Volume</li>
                    <li>Market Cap</li>
                </ul>
            </div>
            
            {filter.map(coin => {
                return (
                    <Coin
                        key={coin.id}
                        rank={coin.market_cap_rank}
                        image={coin.image}
                        name={coin.name}
                        symbol={coin.symbol}
                        price={coin.current_price}
                        hourlyPriceChange={coin.price_change_percentage_1h_in_currency}
                        dailyPriceChange={coin.price_change_percentage_24h_in_currency}
                        weeklyPriceChange={coin.price_change_percentage_7d_in_currency}
                        volume={coin.total_volume}
                        marketcap={coin.market_cap}
                    />
                );
            })}
        </section>
    )
}
