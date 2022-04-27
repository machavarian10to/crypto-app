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

  const [priceTo, setPriceTo] = useState(0)

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d')
    .then(response => { 
      setCoins(response.data);
    })
    .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    const type = (sortedType === "ascending") ? -1 : 1;
    
    coins.sort((a, b) => type * a.name.localeCompare(b.name))
    
  }, [sortedType, coins]);


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

  const nameFilter = coins.filter(coin => {
    return coin.name.toLowerCase().includes(search.toLowerCase())
     || coin.symbol.toLowerCase().includes(search.toLowerCase());
  });

  const priceFilter = coins.filter(coin => {
      return priceFrom <= coin.current_price 
      && priceTo >= coin.current_price;
  }) 


  return (
    <div className='coin-app'>
      <Header />

      <Summary
        fullMarketCap={fullMarketCap}
        totalVolume={totalVolume}
        coinsQuantity={coins.length}
      />

      <Filters 
        setSortedType={setSortedType} 
        setSearch={setSearch} 
        setPriceFrom={setPriceFrom} 
        setPriceTo={setPriceTo}
      />
      
      {priceFrom.length > 0 || priceTo.length > 0
       ? <Table filter={priceFilter} />
       :<Table filter={nameFilter} />
      }
    </div>
  );
}