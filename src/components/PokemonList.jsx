import React from 'react'
import PokemonCard from './PokemonCard'
import './PokemonList.css'

const PokemonList = ({pokemons}) => {
  return (
    <div className='PokemonList'>
      { pokemons?.map((pokemon)=>{
        return <PokemonCard key={pokemon.id}
        image={pokemon.sprites.front_default} 
        name={pokemon.name}
        types= {pokemon.types}
        id= {pokemon.id}
        favorite={pokemon.favorite}
        />
      })
      }
    </div>
  )
}
PokemonList.defaultProps = {
  pokemons: Array(10).fill(''),
}

export default PokemonList