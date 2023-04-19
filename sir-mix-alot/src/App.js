import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import SearchBar from "./Components/SearchBar";
import { useNavigate } from "react-router-dom";
import Main from "./Components/Main";
import CocktailList from "./Components/CocktailList";

const App = () => {
  const [cocktails, setCocktails] = useState([]);
  //const [selectedCocktail, setSelectedCocktail] = useState(null)
  const [choice, setChoice] = useState("");

  const handleChange = (e) => {
    setChoice(e.target.value);
  };

  let navigate = useNavigate();

  const handleClick = (e) => {
    
    navigate(`/CocktailList/${choice}`);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Main />
              <SearchBar
                placeholder="Search"
                choice={choice}
                handleChange={handleChange}
                handleClick={handleClick}
              />
            </div>
          }
        />

        <Route
          path="/CocktailList/:choice"
          element={
            <CocktailList cocktails={cocktails} setCocktails={setCocktails} />
          }
        />
      </Routes>
    </div>
  );
};

export default App;

