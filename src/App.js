import { useEffect } from 'react';
import { Col,Spin } from 'antd';
import 'antd/dist/reset.css';
import PokemonList from './components/PokemonList';
import Searcher from './components/Searcher';
import './App.css';
import logo from './statics/logo.svg';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { get, getIn } from"immutable";
import { fetchPokemonsWithDetails } from './slices/dataSlice';

function App() {
 const pokemons = useSelector(state => state.data.pokemons,shallowEqual);
const loading = useSelector(state => state.ui.loading);
 const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokemonsWithDetails(pokemons));
  }, [])
  
  return (
    <div className="App">
      <Col align={'center'} >
        <img className='logo-img' height={100} src={logo} alt="Pokedux"/>
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {loading?(
      <Col offset={12} style={{ marginTop: '30vh' }}>
        <Spin spinning={true} size='large' />
      </Col>
      ):
      <PokemonList pokemons={pokemons}/>}
    </div>
  );
}


export default App;
