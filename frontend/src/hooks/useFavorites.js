import { useState, useEffect } from "react";

function useFavorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("favorites");
    if (saved) setFavorites(JSON.parse(saved));
  }, []);

  const toggleFavorite = (item) => {
    let updated;

    if (favorites.some(f => f.id === item.id)) {
      updated = favorites.filter(f => f.id !== item.id);
    } else {
      updated = [...favorites, item];
    }

    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return { favorites, toggleFavorite };
}

export default useFavorites;