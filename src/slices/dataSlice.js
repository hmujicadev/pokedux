import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemonDetails, getPokemons } from "../api";
import { setLoading } from "./uiSlice";

const initialState = {
  pokemons: [],
}

export const fetchPokemonsWithDetails = createAsyncThunk(
  'data/fetchPokemonsWithDetails',
  // segundo parametro thunkAPI
  async (_, {dispatch}) => {
    dispatch(setLoading(true));
    //dispatch del loader
    // fetch
    //dispatch del loader
    const pokemonRes = await getPokemons();
    const pokemonDetailed = await Promise.all(
      pokemonRes.map(pokemon => getPokemonDetails(pokemon))
    )
    await dispatch(setPokemons(pokemonDetailed));
    dispatch(setLoading(false));
    // dispatch(setLoading(false));
  } 
)

export const dataSlice = createSlice({
  name:'data',
  initialState,
  reducers:{
    setPokemons : (state,action) => {
      state.pokemons = action.payload;
    },
    setFavorite : (state,action) => {
      const currentPokemonIndex = state.pokemons.findIndex((pokemon) => 
      pokemon.id === action.payload.pokemonId);

      if(currentPokemonIndex >= 0){
         const isFavorite = state.pokemons[currentPokemonIndex].favorite;
         state.pokemons[currentPokemonIndex].favorite = !isFavorite;
      }
    },
    
  },
})

console.log(dataSlice)
export const {setPokemons,setFavorite} = dataSlice.actions;

export default dataSlice.reducer