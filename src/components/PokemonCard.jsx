import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { useDispatch } from "react-redux";
import { setFavorite } from "../slices/dataSlice";

import StarButton from "./StarButton";


const PokemonCard = ({name,image,types,id,favorite}) => {
  const dispatch = useDispatch()
  const typeString = types.map((elem) => elem.type.name).join(', ');

  const handleFavorite = ()=> {
    dispatch(setFavorite({pokemonId:id}))

  }
  
  return (
    <Card style={{width:250}} title={name} 
    cover={<img src={image} alt={name} />}
    extra={<StarButton isFavorite={favorite} onClick={handleFavorite}/>}>
      <Meta description={typeString}/>
    </Card>
  )
}

export default PokemonCard