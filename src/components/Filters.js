import '../styles/Filters.css'

export default function Filters({ setSortedType, setSearch, setPriceFrom, setPriceTo }) {
    return (
      <div className='coin-search'> 
        <form>
          <select onChange={e => setSortedType(e.target.value)}>
            <option selected disabled>-- Sort coins by name --</option>
            <option value='ascending'>ascending</option>
            <option value='descending'>descending</option>
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

