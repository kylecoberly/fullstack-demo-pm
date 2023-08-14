import './DogList.css';
import DogListing from './DogListing';
import { useState } from "react"
import initialDogs from "./dogs.json"

function App() {
	const [dogs, setDogs] = useState(initialDogs)

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
