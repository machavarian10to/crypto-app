import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Summary from './Summary'
import Filters from './Filters';
import Table from './Table';
import '../styles/App.css';

export default function App() {
  const [coins, setCoins] = useState([]);
  
  const [sortedType, setSortedType] = useState('')

  const [search, setSearch] = useState('');

  const [priceFrom, setPriceFrom] = useState(0)

  const [priceTo, setPriceTo] = useState(1000000)

  useEffect(() => {
    axios.get('https://cors-anywhere.herokuapp.com/https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d')
    .then(res => setCoins(res.data))
    .catch(error => console.log(error));
  }, []);

  function fullMarketCap() {
    let sum = 0;
    coins.forEach(coin => sum += coin.market_cap)
    return sum;
  }

  function totalVolume() {
    let sum = 0;
    coins.forEach(coin => sum += coin.total_volume)
    return sum;
  }
  
  function sortCoins(type) {
    setSortedType(type);
    const sortedOption = (type === "asc") ? 1 : -1;
    coins.sort((a, b) => sortedOption * a.name.localeCompare(b.name));
  }

  const nameFilter = coins.filter(coin => {
    return coin.name.toLowerCase().includes(search.toLowerCase())
     || coin.symbol.toLowerCase().includes(search.toLowerCase());
  });

  const priceFilter = coins.filter(coin => {
      return (coin.current_price >= priceFrom || !priceFrom) 
      && (coin.current_price <= priceTo || !priceTo);
  });
  


  return (
    <div className='coin-app'>
      <Header />

      <Summary
        fullMarketCap={fullMarketCap}
        totalVolume={totalVolume}
        coinsQuantity={coins.length}
      />

      <Filters 
        sortCoins = {sortCoins}
        setSearch={setSearch} 
        setPriceFrom={setPriceFrom} 
        setPriceTo={setPriceTo}
      />

      {
        coins.length === 0 && 
        <h1 style={{ margin: "50px" }}>
          Activate CORS Header:
          <a href='https://cors-anywhere.herokuapp.com/corsdemo' target='_blank' rel="noreferrer"> cors-anywhere</a>
        </h1>
      }
      
      <Table filter={priceFrom || priceTo ? priceFilter : nameFilter} />
    </div>
  );
}