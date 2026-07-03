import { useContext } from "react";
import { FavoritesContext } from "../App";
import FishCard from "../components/FishCard";
import "./FishGallery.css";
import "./Favorites.css";

function Favorites() {
  const [favorites] = useContext(FavoritesContext);
  if(favorites.length === 0){
    return(<p className='empty-gallery'>No favorites yet.
     Please go to the gallery and add some!</p>);
  }

  return (
    <div className='fish-gallery'>
  {favorites.map((fish) => 
  (<FishCard
  key={fish.id}
  fish={fish}
  from="favorites"
/>))}
    </div>
  );
  }

export default Favorites;