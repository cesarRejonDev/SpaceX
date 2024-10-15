import { useEffect, useState } from 'react';
import Heart from './icons/Heart';

const handleFavorite = (data, isFavorite, setIsFavorite) => {
 let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
 
 if (isFavorite) {
  favorites = favorites.filter(fav => fav.id !== data.id );
 } else{
    favorites.push(data);
 }

  localStorage.setItem('favorites',JSON.stringify(favorites));
  setIsFavorite(!isFavorite);
}

const RocketCard = ({ id, name, date, success, details, image}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    const isFav = favorites.some(fav => fav.id === id);

    if (isFav) {
      setIsFavorite(true);
    }
  },[id])

  return (
    <div className="border border-slate-500 p-4 rounded shadow-md">
      {/* Nombre del lanzamiento */}
      <div className='flex justify-between items-center'>
        <h2 className="text-lg font-bold bebas-neue-normal">{name}</h2>
        <Heart 
          className={`size-6 cursor-pointer ${isFavorite ? 'fill-red-700' : 'hover:fill-red-700'}`}
          onClick={() => handleFavorite({id, name, date, success, details, image}, isFavorite, setIsFavorite)} 
        />
      </div>
      {/* Patch image of launch */}
      {image ? (
        <img src={image} alt={name} className="mx-auto mb-4 w-22 h-22" />
      ) : (
        <div className="w-20 h-20 bg-gray-300 mx-auto mb-4"></div>  // Si no hay imagen, mostramos un placeholder
      )}

      {/* Launch Date y Success */}
      <div className="flex justify-between items-center">
        <p>Launch Date: {new Date(date).toLocaleDateString()}</p>
        <p className={success ? 'px-2 bg-green-700 rounded-md font-bold' : 'px-2 bg-red-700  rounded-md font-bold'}>
          {success ? 'Success' : 'Fail'}
        </p>
      </div>

      {/* launch Details */}
      <p>{details ? details : 'Witout Details'}</p>
    </div>
  );
};

export default RocketCard;
