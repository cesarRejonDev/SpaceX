import'./index.css'
import React, { useState, useEffect} from 'react';
import RocketCard from './componets/RocketCard';
import NavBar from './componets/NavBar';

    function App() {
      const [launches, setLaunches] = useState([]);  // Estado para los lanzamientos
      const [loading, setLoading] = useState(true);  // Estado para manejar la carga
      const [filters, setFilters] = useState({
        // rocket: "gergi349g4",
        // date_utc: "",
        // success: ""
        // name: ""
      });
      
      const handleFilters = (filter) => {
        if (filter.hasOwnProperty('name')) {
          setFilters({
            ...filters,
            name: { $regex: filter.name, $options: "i" },
          });
        } else {
          setFilters({ ...filters, ...filter });
        }
        console.log(filters);
      }
      
      const filterData = async () => {
        const query = {
          query: { ...filters }
        }
        await fetch('https://api.spacexdata.com/v4/launches/query', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(query)
        })
          .then(response => response.json())
          .then(data => {
            setLaunches(data.docs);   //Consume otro endpoint
            console.log(data.docs);
            setLoading(false);   // Cambia el estado de carga
          })
        .catch(error => console.error('Error al obtener los lanzamientos:', error));
      }

      useEffect(() => { 
        const timeOut = setTimeout(() => {
          filterData();
        }, 2000);
        return () => clearTimeout(timeOut);
      }, [filters]);
      
    useEffect(() => {
      fetch('https://api.spacexdata.com/v4/launches')
        .then(response => response.json())
        .then(data => {
          setLaunches(data);   // Guarda datos del estado
          setLoading(false);   // Cambia el estado de carga
        })
      .catch(error => console.error('Error al obtener los lanzamientos:', error));
    }, []); // El array vacío asegura se ejecute una vez  cuando se monte el componente


      if (loading) {
        return <p className="text-center">Loading...</p>;  // Mientras carga el primer dato muestra este texto
      }

    return (
      <section className="max-w-screen-xl px-5 mx-auto">
        <h1 className="text-4xl text-center mb-4 bebas-neue-normal font-bold text-neutral-400">SpaceX Launches</h1>
        <NavBar 
          handleFilters={handleFilters}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {launches.map(launch => (
            <RocketCard
              key={launch.id}
              id={launch.id}
              name={launch.name}
              date={launch.date_utc}
              details={launch.details}
              image={launch.links.patch.small}
              success={launch.success}
            />
          ))}
        </div>
      </section>
    )
 }

export default App
