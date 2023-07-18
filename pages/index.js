import React, { useState, useEffect } from "react";

const brands = [
  { id: 1, name: "BMW" },
  { id: 2, name: "Mercedes" },
  { id: 3, name: "Audi" },
];
const types = [
  { id: 1, name: "Sedan" },
  { id: 2, name: "SUV" },
  { id: 3, name: "Coupe" },
];

function App() {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [match, setMatch] = useState(null);
  const [shuffledBrands, setShuffledBrands] = useState(brands);
  const [shuffledTypes, setShuffledTypes] = useState(types);

  useEffect(() => {
    setShuffledBrands(shuffleArray([...brands]));
    setShuffledTypes(shuffleArray([...types]));
  }, []);

  const shuffleArray = (array) => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  const handleBrandClick = (brand) => {
    setSelectedBrand(brand);
    setMatch(null);
  };

  const handleTypeClick = (type) => {
    setSelectedType(type);
    if (selectedBrand) {
      setMatch(selectedBrand.id === type.id);
    }
  };

  const brandButtonClasses = (brand) =>
    `${
      selectedBrand === brand && match !== null
        ? match
          ? "bg-green-500"
          : "bg-red-500"
        : "bg-white"
    } ${
      selectedBrand === brand && match === null
        ? "border-2 border-blue-500"
        : ""
    }`;

  const typeButtonClasses = (type) =>
    `${
      selectedType === type && match !== null
        ? match
          ? "bg-green-500"
          : "bg-red-500"
        : "bg-white"
    } ${
      selectedType === type && match === null ? "border-2 border-blue-500" : ""
    }`;

  return (
    <div>
      <h2>Brands</h2>
      <div>
        {shuffledBrands.map((brand) => (
          <button
            key={brand.id}
            onClick={() => handleBrandClick(brand)}
            className={brandButtonClasses(brand)}
          >
            {brand.name}
          </button>
        ))}
      </div>
      <h2>Types</h2>
      <div>
        {shuffledTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => handleTypeClick(type)}
            className={typeButtonClasses(type)}
          >
            {type.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
