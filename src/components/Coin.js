import React from 'react';
import '../styles/Coin.css';

export default function Coin ({
  rank, image, name, symbol, price,
  hourlyPriceChange, dailyPriceChange,  weeklyPriceChange,
  volume, marketcap
}) {
  return (
    <div className='coin-container'>
      <div className='coin-row'>
        <div className='coin-rank'>
          <p>{rank}</p>
        </div>

        <div className='coin'>
          <img src={image} alt='coin-logo' />
          <h1>{name}</h1>
          <p className='coin-symbol'>{symbol}</p>
        </div>

        <div className='coin-data'>
          <p className='coin-price'>${price.toLocaleString()}</p>
          
          {hourlyPriceChange < 0 ? (
            <p className='coin-percent red'>{hourlyPriceChange.toFixed(2)}%</p>
          ) : (
            <p className='coin-percent green'>{hourlyPriceChange.toFixed(2)}%</p>
          )}

          {dailyPriceChange < 0 ? (
            <p className='coin-percent red'>{dailyPriceChange.toFixed(2)}%</p>
          ) : (
            <p className='coin-percent green'>{dailyPriceChange.toFixed(2)}%</p>
          )}

          {weeklyPriceChange < 0 ? (
            <p className='coin-percent red'>{weeklyPriceChange.toFixed(2)}%</p>
          ) : (
            <p className='coin-percent green'>{weeklyPriceChange.toFixed(2)}%</p>
          )}

          <p className='coin-volume'>${volume.toLocaleString()}</p>

          <p className='coin-marketcap'>${marketcap.toLocaleString()}</p>
        </div>

      </div>
    </div>
  );
};
