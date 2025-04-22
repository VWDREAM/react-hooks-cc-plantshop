import React, { useState, useEffect } from "react";
import PlantList from "./PlantList";
import NewPlantForm from "./NewPlantForm";
import Search from "./Search";

const API_BASE_URL = "http://localhost:6001";

function App() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(`${API_BASE_URL}/plants`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Initial plants fetched:", data);
        const initialPlantsWithStock = data.map(plant => ({
          ...plant,
          inStock: plant.inStock !== undefined ? plant.inStock : true,
        }));
        setPlants(initialPlantsWithStock);
      });
  }, []);

  const handleAddPlant = (newPlant) => {
    fetch(`${API_BASE_URL}/plants`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((response) => response.json())
      .then((addedPlant) => {
        console.log("New plant added:", addedPlant);
        setPlants([...plants, addedPlant]);
      });
  };

  const handleUpdatePlant = (id, updatedPlant) => {
    console.log("Updating plant with ID:", id, "with data:", updatedPlant);
    setPlants((prevPlants) =>
      prevPlants.map((plant) =>
        plant.id === id ? { ...plant, ...updatedPlant } : plant
      )
    );
  
  };

  const displayedPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <header>
        <h1>
          Plantsy <span className="logo" role="img">🌱</span>
        </h1>
      </header>
      <main>
        <NewPlantForm onAddPlant={handleAddPlant} />
        <Search onSearch={setSearchTerm} />
        <PlantList plants={displayedPlants} onUpdatePlant={handleUpdatePlant} />
      </main>
    </div>
  );
}

export default App;
