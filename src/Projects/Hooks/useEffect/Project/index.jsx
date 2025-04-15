import { useState,useEffect } from "react";
import "./Pokemon.css";

export const PokemonCompo = ()=>{

    const[pokemon,setPokemon]=useState(null);

    const API = "https://pokeapi.co/api/v2/pokemon/ditto";

    const fetchPokemon= async()=>{
        try {
            let res= await fetch(API);
            let data= await res.json();
    
            setPokemon(data);
    
        } catch (error) {
            console.log(error);
        }

        // fetch(API)
        //       .then((res) => res.json())
        //       .then((data) => {
        //         setPokemon(data);
        //         // setLoading(false);
            //   })
            //   .catch((error) => {
            //     console.log(error);
                // setError(error);
                // setLoading(false);
            //   }); res=resolve result  and error are the bydefault parameter  and you can also print them
          

        // fetch(API)
        // .then((res)=>res.json())
        // .then((data) => {
        //     setPokemon(data);
        // })
        // .catch((error)=>{ 
        //     console.log(error);
        // })

}


    useEffect(()=>{

        fetchPokemon();

    },[])

    console.log(pokemon);

    if(pokemon){
        return(
            <>

            <section className="contaner">
                <header>
                    <h1>Let,s Catch Pokemon</h1>
                </header>
                <ul className="cards">
                    <li className="pokemon-card">

                        <figure>
                            <img
                            src={pokemon.sprites.other.dream_world.front_default}
                            alt={pokemon.name}
                            className="pokemon-image"
                            />
                        </figure>
                    
                        <h1>{pokemon.name}</h1>
            
                        <div className="grid-three-cols">
                            <p className="pokemon-info">
                            Height: <span> {pokemon.height} </span>
                            </p>
                            <p className="pokemon-info">
                            Weight: <span> {pokemon.weight}</span>
                            </p>
                            <p className="pokemon-info">
                            speed: <span>{pokemon.stats[5].base_stat}</span>
                            </p>
                        </div>
                    </li>
                </ul>
                
            </section>
            </>
        )
    }
}