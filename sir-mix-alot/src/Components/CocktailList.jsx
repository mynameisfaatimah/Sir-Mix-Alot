import Nav from './Nav'
//import {useNavigate} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../CocktailData'



export default function CocktailList (){
        const [cocktails, setCocktails] = useState([])
    let { choice } = useParams()
    //let cocktails = []
    useEffect(() => {
        const getCocktails = async () => {
            const response = await axios.get(`${BASE_URL}${choice}`,{headers: { 'X-Api-Key':process.env.REACT_APP_API_KEY}})
        //console.log(response.data)
        setCocktails(response.data)
        //cocktails = response.data
        }
        
         getCocktails()

         console.log(cocktails)
    }, [])
    
    return(
            <div>
                <div className= "header-title">
                    <h1>
                        Choose your cocktail card
                    </h1>
                </div>
                < div className="nav-container">
                    <Nav />
                </div>
                {
                 cocktails.map((cocktail) =>
                 (

                    
                    <div key={cocktail} classname="cocktail=card" >
                        <h1>{cocktail.name}</h1>
                          <p>{cocktail.instructions}</p>
                        <uo>
                            <li>{cocktail.ingredients}</li>
                        </uo>
                            <button>Select Cocktail</button>
                    </div>
                    
                 ))   
                }
            </div>
        )
}