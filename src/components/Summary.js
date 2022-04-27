import '../styles/Summary.css'

export default function Summary({ fullMarketCap, totalVolume, coinsQuantity }) {
    return (
        <section className="summary">
            <div className="summary-container">
                <div className="summary-card">
                    <h3>${fullMarketCap().toLocaleString()}</h3>
                    <div className='line'></div>
                    <p>Total Market Capitalization</p>
                </div>
                <div className="summary-card">
                    <h3>${totalVolume().toLocaleString()}</h3>
                    <div className='line'></div>
                    <p>24h Trading Volume</p>
                </div>
                <div className="summary-card">
                    <h3>{coinsQuantity}</h3>
                    <div className='line'></div>
                    <p>Amount of Coins</p>
                </div>
            </div>
        </section>
    )
}

