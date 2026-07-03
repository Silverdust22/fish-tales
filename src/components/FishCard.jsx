import "./FishCard.css";
import { Link } from "react-router-dom";

function FishCard({ key, fish, from }) {
  const path =
    from === "favorites" ? `/favorites/${fish.id}` : `/gallery/${fish.id}`;

  return (
    <Link to={path} className="fishcard-link" state={{ from }}>
      <div className="fish-card">
        <img src={fish.image} alt={fish.name} />
        <h3>{fish.name}</h3>
      </div>
    </Link>
  );
}

export default FishCard;
