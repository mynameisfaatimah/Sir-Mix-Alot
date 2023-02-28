import React from 'react'

function SearchBar ({placeholder, choice, handleChange}) {

return (

    < div className= "search">
        <div className="searchInputs">
            <input type="text"  
            
            value={choice[""]}
            onChange={handleChange}
            placeholder={placeholder}/>
            <div className="searchIcon"></div>
        </div>
        <div className="dataResult"></div>
    </div>
    
)
}

    


export default SearchBar;

