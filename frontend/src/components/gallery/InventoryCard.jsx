import '../styles/card.css'

function InventoryCard({ item, onClick, onToggleFavorite, isFavorite }) {
  return (
    <div className="inventoryCard" onClick={onClick}>
      <img
        src={`http://localhost:3000/inventory/${item.id}/photo`}
        alt={item.inventory_name}
      />
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