// import React from "react";
import React, {useState} from "react";

function FIcon() {
  // Estado para controlar si el ícono es rojo o no
  const [isRed, setIsRed] = useState(false);

  // Función para manejar el clic
  const handleClick = () => {
    setIsRed(!isRed); // Alterna el color entre rojo y el original
  };

  return (
    <button onClick={handleClick} className="focus:outline-none"> 
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          // Cambiar el relleno y el borde según el estado
          fill={isRed ? "red" : "#2A4157"} // Cambia el color de relleno a rojo
          fillOpacity={isRed ? "1" : "0.24"} // Aumentar la opacidad cuando esté en rojo
          stroke={isRed ? "red" : "#222"} // Cambiar el color del borde a rojo
          strokeWidth="1.4"
          d="M4.45 13.908l6.953 6.531c.24.225.36.338.5.366a.5.5 0 00.193 0c.142-.028.261-.14.5-.366l6.953-6.53a5.203 5.203 0 00.549-6.983l-.31-.399c-1.968-2.536-5.918-2.111-7.301.787a.54.54 0 01-.974 0C10.13 4.416 6.18 3.99 4.212 6.527l-.31.4a5.203 5.203 0 00.549 6.981z"
        />
      </svg>
    </button>
  );
}
export default FIcon;