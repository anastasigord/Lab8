import useFavorites from "../hooks/useFavorites";

function Favorites() {
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <div>
      <h2>Favorites</h2>

      {favorites.map(item => (
        <div key={item.id}>
          {item.inventory_name}
          <button onClick={() => toggleFavorite(item)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default Favorites;