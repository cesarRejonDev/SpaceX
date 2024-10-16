import { useEffect, useState } from "react";
import Navbar from "./NavBar"
import RocketCard from "./RocketCard"

const Favorites = () => {
	const [favs, setFavs] = useState([]);  // Estado para los lanzamientos
	const [search, setSearch] = useState("");
	
	const handleChange = (e) => {
		setSearch(e.target.value);
	}
  
	useEffect(() => {
		const localStorageFavs = JSON.parse(localStorage.getItem('favorites')) || [];
		setFavs(localStorageFavs);
	},[])
	
	return (
		<section className="max-w-screen-xl px-5 mx-auto">
			<h1 className="text-4xl text-center mb-4 bebas-neue-normal font-bold text-neutral-400">
				Favorites Launches
			</h1>
			<Navbar />
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{favs.map(launch => (
					<RocketCard
						key={launch.id}
						id={launch.id}
						name={launch.name}
						date={launch.date}
						details={launch.details}
						image={launch.image}
						success={launch.success}
					/>
			))}
			</div>
		</section>
	)
}

export default Favorites