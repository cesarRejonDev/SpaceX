import'./index.css'
import React,{ useState, useEffect} from 'react';
import RocketCard from './componets/RocketCard'

    function App() {
      const [launches, setLaunches] = useState([]);  // Estado para los lanzamientos
      const [loading, setLoading] = useState(true);  // Estado para manejar la carga

      // useEffect para obtener los datos cuando se monta el componente
    useEffect(() => {
      fetch('https://api.spacexdata.com/v4/launches')
        .then(response => response.json())
        .then(data => {
          setLaunches(data);   // Guarda datos del estado
          setLoading(false);   // Cambia el estado de carga
        })
        // .catch(error => console.error('Error al obtener los lanzamientos:', error));
    }, []); // El array vacío asegura se ejecute una vez  cuando se monte el componente


      if (loading) {
        return <p className="text-center">Loading...</p>;  // Mientras carga el primer dato muestra este texto
      }

    return (
      <div className="container mx-auto p-5  h-full w-full  bg-black class=absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <h1 className="text-4xl text-center mb-4 bebas-neue-normal font-bold text-neutral-400">SpaceX Launches</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {launches.map(launch => (
          <RocketCard
            key={launch.id}
            name={launch.name}
            date={launch.date_utc}
            details={launch.details}
            image={launch.links.patch.small}
          />
        ))}
      </div>
    </div>
    )
 }

export default App
