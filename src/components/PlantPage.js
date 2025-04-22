import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ onAddPlant }) { // Receive onAddPlant as a prop
  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant} /> {/* Pass onAddPlant down to NewPlantForm */}
      <Search />
      <PlantList />
    </main>
  );
}

export default PlantPage;
