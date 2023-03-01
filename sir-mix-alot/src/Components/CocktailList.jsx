import Nav from './Nav'

export default function CocktailList (props){
        return(
            <div>
                <div className= "header-title">
                    <h1>
                        Do you know what you want?
                    </h1>
                </div>
                < div className="nav-container">
                    <Nav />
                </div>
                {
                 props.cocktails.map((cocktail) =>
                 (
                    <div key={cocktail} classname="card">
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