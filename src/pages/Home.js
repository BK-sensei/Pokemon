import React, { useState, useEffect } from 'react'
import '../pages-style/home-style.css'

function Home() {

    const [pokemon, setPokemon] = useState(null)
    const [id, setId] = useState(1)

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then (response => response.json())
        .then (result => {
            setPokemon(result)
        })
    },[id])

    function handleRandomPokeClick () {
        var min = 1;
        var max = 151;

        let randomPoke = Math.floor(Math.random() * (max - min + 1) + min)
        setId(randomPoke)
    }

    console.log(pokemon);

    return (
        <div className="background">

            <div className="container pt-4 pb-4">

                {pokemon === null ? 
                <p>There is no pokemon</p> :
                
                <div className="row d-flex justify-content-center">

                    <div className="col-3">

                        <div className="card poke-card mb-4">
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} className="card-img-top" alt="Pokemon" />
                            <div className="card-body">
                                <h3 className="card-title text-center fw-bold text-white">{pokemon.name}</h3>
                                <p className="card-text text-white"><span className="fw-bold">Height :</span>{pokemon.height}</p>
                                <p className="card-text text-white"><span className="fw-bold">Weight :</span> {pokemon.weight}</p>
                                <p className="card-text text-white fw-bold">Types :</p>
                                {pokemon.types.map(type => (
                                    <ul>
                                        <li className="text-white">
                                            {type.type.name}
                                        </li>
                                    </ul>
                                ))}
                            </div>
                        </div>

                        <div className="d-flex justify-content-center">
                            <button type="button" class="btn btn-outline-light text-white" onClick={handleRandomPokeClick}>Show random pokemon</button>
                        </div>

                    </div>
                </div>
    
            }
            </div>

        </div>
    )
}

export default Home