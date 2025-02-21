// App.jsx
import React, { useState } from "react";
import DEFAULT_CAKE from "./config/cake.json";
import Cake from "./Cake.jsx";

function App() {
  const [cake, setCake] = useState(DEFAULT_CAKE);
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <div className="bg-pink-100 min-h-screen p-8">
      <h1 className="text-6xl font-bold text-purple-900 mb-9">Cake Store</h1>
      <div className="grid grid-cols-2 gap-10">
        {cake.map((cake) => (
          <Cake
            key={cake.id}
            cake={cake}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
