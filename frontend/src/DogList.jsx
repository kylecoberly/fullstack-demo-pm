import './DogList.css';
import DogListing from './DogListing';
import { useState } from "react"
import { useEffect } from "react"

const apiUrl = process.env.API_URL || "http://localhost:4000"

function App() {
	const [dogs, setDogs] = useState([])

	useEffect(() => {
		fetch(`${apiUrl}/dogs`)
			.then(response => response.json())
			.then(({ dogs }) => {
				setDogs(dogs)
			}).catch(error => {
				console.error(error.message)
			})
	}, [])

	return (
		<ul className="DogList">
			{dogs.map(({ id, imageUrl, name }) => (
				<li key={id}>
					<DogListing
						imageUrl={imageUrl}
						name={name}
					/>
				</li>
			))}
		</ul>
	);
}

export default App;
