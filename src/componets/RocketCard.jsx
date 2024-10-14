import React from 'react';

const RocketCard = ({ name, date, details, image }) => {
  return (
    <div className="bg-gray-300 p-4 rounded shadow-md ">
      {/* Nombre del lanzamiento */}
      <h2 className="text-lg font-bold bebas-neue-normal">{name}</h2>
      
      {/* Imagen del parche del lanzamiento */}
      {image ? (
        <img src={image} alt={name} className="mx-auto mb-4 w-20 h-20" />
      ) : (
        <div className="w-20 h-20 bg-gray-300 mx-auto mb-4"></div>  // Si no hay imagen, mostramos un placeholder
      )}

      {/* Fecha del lanzamiento */}
      <p>Launch Date: {new Date(date).toLocaleDateString()}</p>

      {/* Detalles del lanzamiento */}
      <p>{details ? details : 'No hay detalles disponibles.'}</p>
    </div>
  );
};

export default RocketCard;
