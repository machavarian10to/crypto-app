import '../styles/Filters.css'

export default function Filters({ sortCoins, setSearch, setPriceFrom, setPriceTo }) {
    return (
      <div className='coin-search'> 
        <form>
        <select defaultValue="-- Sort coins by name --" onChange={e => sortCoins(e.target.value)}>
          <option disabled>-- Sort coins by name --</option>
          <option value='asc'>ascending</option>
          <option value='desc'>descending</option>
        </select>

          <input
            type='text'
            onChange={e => setSearch(e.target.value)}
            placeholder='Search by coin'
          />

          <input
            type='number'
            onChange={e => setPriceFrom(e.target.value)}
            placeholder='Price from'
          />

          <input
            type='number'
            onChange={e => setPriceTo(e.target.value)}
            placeholder='Price to'
          />
          
        </form>
      </div>

    )
}

