// Cake.jsx
import React from "react";
import IonIcon from "@reacticons/ionicons";

const Cake = ({ cake, favorites, toggleFavorite }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform">
      <img src={cake.artworkUrl} className="w-full h-64 object-cover" />
      <div className="p-4">
        <p className="text-2xl font-bold">{cake['type of cake']}</p> 
        <p className="text-lg font-normal mt-2">{cake.description}</p>
        <p className="text-xl font-medium mt-2">${cake.price.toFixed(2)}</p>
        <button
          className="text-red-600 mt-2 text-3xl"
          onClick={() => toggleFavorite(cake.id)}
        >
          {favorites.includes(cake.id) ? (
            <IonIcon name="heart" />
          ) : (
            <IonIcon name="heart-outline" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Cake;
