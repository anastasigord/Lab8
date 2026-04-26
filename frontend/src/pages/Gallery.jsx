import { useEffect, useState } from "react";
import { getInventory } from "../services/inventoryApi";
import InventoryCard from "../components/gallery/InventoryCard";
import useFavorites from "../hooks/useFavorites";

function Gallery() {
  const [items, setItems] = useState([]);
  const { favorites, toggleFavorite } = useFavorites();

  useEffect(() => {
    getInventory().then(setItems);
  }, []);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
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
  );
}

export default Gallery;