import fish from '../data/fishData';
import FishCard from '../components/FishCard';
import './FishGallery.css';

function FishGallery() {
  return (
  <div className='fish-gallery'>
    {fish.map((item) => ( <FishCard key={item.id} fish={item} from="gallery" />))}
  </div>
    );
}

export default FishGallery;