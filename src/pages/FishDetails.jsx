import fish from "../data/fishData";
import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart, FaTrashAlt } from "react-icons/fa";
import { useContext } from "react";
import { FavoritesContext } from "../App";
import "./FishDetails.css";

function FishDetails() {
  const { id } = useParams();
  const fishId = Number(id);
  const navigate = useNavigate();
  const location = useLocation();
  const [favorites, setFavorites] = useContext(FavoritesContext);
  const fromFavorites = location.state?.from === "favorites";
  const selectedFish = fromFavorites
    ? favorites.find((item) => item.id === fishId)
    : fish.find((item) => item.id === fishId);

  if (!selectedFish) {
    return (
      <div className="fish-details">
        <h1>Fish Not Found</h1>
        <p>The requested fish does not exist.</p>
      </div>
    );
  }
  const isFavorite = favorites.some((item) => item.id === selectedFish.id);
  console.log(fromFavorites);
  console.log(location);
  console.log(location.state);
  const path = location.state?.from === "favorites" ? "/favorites" : "/gallery";
  console.log(path);
  const saveFavorite = () => {
    setFavorites((prev) => [...prev, selectedFish]);
  };
  const removeFavorite = () => {
    setFavorites((prev) => prev.filter((item) => item.id !== selectedFish.id));
  };
  const removeFromFavorites = () => {
    setFavorites((prev) => prev.filter((item) => item.id !== selectedFish.id));
    navigate("/favorites");
  };

  return (
    <div className="fish-details">
      <div className="fish-heading">
        <h1>{selectedFish.name}</h1>
        {fromFavorites ? (
          <FaTrashAlt
            className="trash-icon"
            title="remove from Favorites"
            onClick={removeFromFavorites}
          />
        ) : isFavorite ? (
          <FaHeart
            className="redheart-icon"
            title="in your Favourites"
            onClick={removeFavorite}
          />
        ) : (
          <FaRegHeart
            className="heart-icon"
            title="Add to Favorites"
            onClick={saveFavorite}
          />
        )}
      </div>
      <img src={selectedFish.image} alt={selectedFish.name} />
      <p>
        <span>Genus: </span>
        {selectedFish.genus}
      </p>
      <p>
        <span>Habitat: </span>
        {selectedFish.habitat}
      </p>
      <p>
        <span>Diet: </span>
        {selectedFish.diet}
      </p>
      <p>
        <span>Size: </span>
        {selectedFish.size}
      </p>
      <p>
        <span>Description: </span>
        {selectedFish.description}
      </p>
      <p>
        <span>Fun-fact: </span>
        {selectedFish.funFact}
      </p>
      <Link to={path} className="back-link">
        ⬅️ Back to {fromFavorites ? "Favorites" : "Gallery"}
      </Link>
    </div>
  );
}

export default FishDetails;
