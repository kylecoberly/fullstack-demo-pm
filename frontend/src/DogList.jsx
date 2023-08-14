import './DogList.css';
import DogListing from './DogListing';
import { useState } from "react"

const initialDogs = [{
	id: 1,
	imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.rd.com%2Fwp-content%2Fuploads%2F2020%2F12%2FGettyImages-185184089.jpg&f=1&nofb=1&ipt=9fe7ee5c4e47bec58ae162811e773ca764092c7a9aca3875b5ebd3e8bd1e0b58&ipo=images",
	name: "Bixby",
}, {
	id: 2,
	imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.rd.com%2Fwp-content%2Fuploads%2F2020%2F12%2FGettyImages-185184089.jpg&f=1&nofb=1&ipt=9fe7ee5c4e47bec58ae162811e773ca764092c7a9aca3875b5ebd3e8bd1e0b58&ipo=images",
	name: "Bixby",
}, {
	id: 3,
	imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.rd.com%2Fwp-content%2Fuploads%2F2020%2F12%2FGettyImages-185184089.jpg&f=1&nofb=1&ipt=9fe7ee5c4e47bec58ae162811e773ca764092c7a9aca3875b5ebd3e8bd1e0b58&ipo=images",
	name: "Bixby",
}, {
	id: 4,
	imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.rd.com%2Fwp-content%2Fuploads%2F2020%2F12%2FGettyImages-185184089.jpg&f=1&nofb=1&ipt=9fe7ee5c4e47bec58ae162811e773ca764092c7a9aca3875b5ebd3e8bd1e0b58&ipo=images",
	name: "Bixby",
}, {
	id: 5,
	imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.rd.com%2Fwp-content%2Fuploads%2F2020%2F12%2FGettyImages-185184089.jpg&f=1&nofb=1&ipt=9fe7ee5c4e47bec58ae162811e773ca764092c7a9aca3875b5ebd3e8bd1e0b58&ipo=images",
	name: "Bixby",
}]


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
