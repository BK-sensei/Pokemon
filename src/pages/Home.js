import React, { useState, useEffect } from 'react'

function Home() {

    const [pokemon, setPokemon] = useState(null)

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/1')
        .then (response => response.json())
        .then (result => {
            setPokemon([result])
        })
    },[])
    console.log(pokemon);
    return (
        <h1>HOME</h1>
    )
}

export default Home