import './DogListing.css';

function DogListing({ imageUrl, name }) {
	return (
		<div className="DogListing">
			<img src={imageUrl} alt={name} />
			<p>{name}</p>
		</div>
	);
}

export default DogListing;
