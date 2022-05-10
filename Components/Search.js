import React from 'react'

const Search = ({getBookName, handleChange}) => {
  return (
    <div className="search--wrap" id="search-bar"><form onSubmit={handleChange}>
        <input type="text"  onChange= {getBookName} className="search--field" id="search--field" name="search--field" placeholder=' Enter book name...'/>
        <button className="search--button" >Search</button></form>
        </div>
  )
}

export default Search