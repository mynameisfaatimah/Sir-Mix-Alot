import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import {BASE_URL} from './CocktailData'
import { Route, Routes } from 'react-router-dom';
import SearchBar from './Components/SearchBar'
import Main from './Components/Main'
//import Image from './Image/RedRoom.JPG'
import CocktailList from './Components/CocktailList';


const App = () => {

  const [cocktails, setCocktails] = useState([])
  //const [selectedCocktail, setSelectedCocktail] = useState(null)
const [choice, setChoice] = useState([])
  useEffect(() => {
    const getCocktails = async () => {
      const response = await axios.get(`${BASE_URL}${choice[""]}`,{headers: { 'X-Api-Key':process.env.REACT_APP_API_KEY}})
    
      console.log(response.data)
      //setCocktails(response.data)
    }
    getCocktails()
  }, [choice])

  const handleChange = (e) => {
    //console.log(choice)
    setChoice({...choice,[e.target.id]: e.target.value})




}
  return (
    <div className="App">
      
      <div className="Main">
      <Main />
      </div>
      
      <SearchBar placeholder="Baby got Yak!" 
      choice={choice} 
      handleChange={handleChange}/>

      <Routes>

        <Route path="/CocktailList" element={
    <CocktailList 
    cocktails={cocktails}
    setCocktails={setCocktails}/>} />

      </Routes>
    </div>
   
  

  );
}

export default App;












//https://www.freecodecamp.org/news/build-a-search-filter-using-react-and-react-hooks/
