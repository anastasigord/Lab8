function InventoryCard({ item, onClick, onToggleFavorite, isFavorite }) {
  return (
    <div onClick={onClick} style={{ border: "1px solid #ccc", padding: 10 }}>
      <img
        src={`http://localhost:3000/inventory/${item.id}/photo`}
        width="100%"
      />
      <h3>{item.inventory_name}</h3>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavorite(item);
        }}
      >
        {isFavorite ? "❤️" : "🤍"}
      </button>
    </div>
  );
}

export default InventoryCard;