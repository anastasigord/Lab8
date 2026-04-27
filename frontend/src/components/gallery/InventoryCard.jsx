import { getImageUrl } from '../../services/inventoryApi'
import '../../styles/card.css'

function InventoryCard({ item, onClick, onToggleFavorite, isFavorite }) {
  return (
    <div className="inventoryCard" onClick={onClick}>
      {item.photo_url ? (
        <img src={getImageUrl(item.photo_url)} alt={item.inventory_name} />
      ) : (
        <div style={{ padding: 20, color: '#7a5b40' }}>Немає фото</div>
      )}
      <div className="inventoryCardBody">
        <h3>{item.inventory_name}</h3>

        <button
          className={`favoriteButton ${isFavorite ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(item);
          }}
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
    </div>
  );
}

export default InventoryCard;