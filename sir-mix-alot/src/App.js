import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import {BASE_URL} from './CocktailData'
import { Route, Routes } from 'react-router-dom';
import SearchBar from './Components/SearchBar'
import { useNavigate } from 'react-router-dom';
import Main from './Components/Main'
//import Image from './Image/RedRoom.JPG'
import CocktailList from './Components/CocktailList';


const App = () => {

  const [cocktails, setCocktails] = useState([])
  //const [selectedCocktail, setSelectedCocktail] = useState(null)
const [choice, setChoice] = useState([])
  //useEffect(() => {}, [choice])

  const handleChange = (e) => {
    //console.log(choice)
    setChoice({...choice,[e.target.id]: e.target.value})
    

}

let navigate = useNavigate()


 

const handleClick = (e) => {
  console.log(choice)
    navigate(`/CocktailList/${choice[""]}`)
  
  
  }




  return (
    <div className="App">
      
      <div className="Main">
      <Main />
      </div>
      
      <SearchBar placeholder="Baby got Yak!" 
      choice={choice} 
      handleChange={handleChange}
      handleClick={handleClick}/>

      <Routes>

        <Route path="/CocktailList/:choice" element={
    <CocktailList 
    cocktails={cocktails}
    setCocktails={setCocktails}/>} />

      </Routes>
    </div>
   
  

  );
}

export default App;












//https://www.freecodecamp.org/news/build-a-search-filter-using-react-and-react-hooks/
