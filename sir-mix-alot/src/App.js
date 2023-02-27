import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import {BASE_URL} from './CocktailData'
import SearchBar from './Components/SearchBar'
import Main from './Components/Main'




const App = () => {

  const [cocktail, setCocktails] = useState([])
  //const [selectedCocktail, setSelectedCocktail] = useState(null)

  useEffect(() => {
    const getCocktails = async () => {
      const response = await axios.get('${BASE_URL}/api.api-ninjas.com/v1/cocktail?name=api_key=${process.env.REACT_APP_API_KEY}')
    }
 

    getCocktails()
  }, [])

  return (
    <div className="App">
      <Main />
      <SearchBar placeholder="Baby got Yak!" />
    
    </div>
  );
}

export default App;
