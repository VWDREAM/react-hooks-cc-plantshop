import React from "react";

function PlantCard({ plant, onUpdatePlant }) {
  const handleStockButtonClick = () => {
    onUpdatePlant(plant.id, { inStock: !plant.inStock });
  };

  return (
    <div className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {plant.inStock ? (
  <button className="primary" onClick={handleStockButtonClick}>In Stock</button>
) : (
  <button className="secondary" disabled>Out of Stock</button>
)}
    </div>
  );
}

export default PlantCard;
