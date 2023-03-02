import React from 'react'
import '../SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';

function SearchBar ({placeholder, choice, handleChange, handleClick}) {

return (

    < div className= "search">
        <div className="searchInputs">
            <form>
            <input type="text"  
            value={choice[""]}
            onChange={handleChange}
            placeholder={placeholder}
            />
            <button className="searchIcon" onClick={handleClick}>
                <SearchIcon />
            </button>
          </form>
        </div>
        <div className="dataResult">
        </div>
    </div>
    
)
}

    


export default SearchBar;

{/* < div className= "search">
{!choice ? (
<div className="searchInputs">
    <input type="text"  
    //value={choice}
    onChange={handleChange}
    placeholder={placeholder}/>
    <button className="searchIcon" onClick={handleClick}>
        <SearchIcon />
    </button>
</div> ) :( 
<div className="dataResult">
</div>)}
</div> */}