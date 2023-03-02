import Nav from './Nav'
//import {useNavigate} from 'react-router-dom'
import CocktailCard from '../CocktailCard.css'
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
                <div className= "header-container">
                    
                    <h1>
                        Choose your Cocktail Card
                    </h1>
                    <a><Nav /></a>
            
                </div>
             
                {
                 cocktails.map((cocktail) =>
                 (

                    <div className="card-container">
                    <div key={cocktail.id} className="cocktail-card" >
                        
                        <h1>{cocktail.name}</h1>
                        <p dangerouslySetInnerHTML={{ __html: cocktail.instructions }}></p>
                        <ul>
                        {cocktail.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                            <button>Select Cocktail</button>
                    </div>

                    </div>
                 ))   
                }
            </div>
        )
}