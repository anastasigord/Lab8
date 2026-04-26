import { useEffect, useState } from "react";
import { getInventory } from "../services/inventoryApi";
import InventoryCard from "../components/gallery/InventoryCard";
import useFavorites from "../hooks/useFavorites";
import '../styles/gallery.css'

function Gallery() {
  const [items, setItems] = useState([]);
  const { favorites, toggleFavorite } = useFavorites();

  useEffect(() => {
    getInventory().then(setItems);
  }, []);

  return (
    <div className="galleryContainer">
      <header className="galleryHeader">
        <h1>Галерея</h1>
      </header>
      <div className="galleryGrid">
        {items.map(item => (
          <InventoryCard
            key={item.id}
            item={item}
            onClick={() => alert(item.inventory_name)}
            onToggleFavorite={toggleFavorite}
            isFavorite={favorites.some(f => f.id === item.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;