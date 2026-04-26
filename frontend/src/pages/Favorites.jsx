import useFavorites from "../hooks/useFavorites";
import InventoryCard from "../components/gallery/InventoryCard";
import '../styles/gallery.css'

function Favorites() {
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <div className="galleryContainer">
      <header className="galleryHeader">
        <h1>❤️ Улюблені</h1>
      </header>
      
      {favorites.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '48px 24px', color: '#64748b' }}>
          <p style={{ fontSize: '18px', marginBottom: '12px' }}>У вас немає улюблених позицій</p>
          <p style={{ fontSize: '14px' }}>Додайте позиції до улюблених з галереї</p>
        </div>
      ) : (
        <div className="galleryGrid">
          {favorites.map(item => (
            <InventoryCard
              key={item.id}
              item={item}
              onClick={() => alert(item.inventory_name)}
              onToggleFavorite={toggleFavorite}
              isFavorite={true}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;