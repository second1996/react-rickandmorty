const CharactersInfo = ({ character }) => {
	const { name, image, status, species, gender, type, origin, location } = character[0]

	return (
		<div className="CharactersInfo">
			<div className="CharactersInfo-photo">
				<img src={image} alt={name} />
				<div className={`status status-${status.toLowerCase()}`}>{status}</div>
			</div>
			<div className="CharactersInfo-meta">
				<h3 className="name">{name}</h3>
				<ul className="attributes">
					<li className="attributes-item"><b>Species:</b> {species}</li>
					<li className="attributes-item"><b>Genger:</b> {gender}</li>
					{type && <li className="attributes-item"><b>Type:</b> {type}</li>}
					<li className="attributes-item"><b>Origin:</b> {origin.name}</li>
					<li className="attributes-item"><b>Location:</b> {location.name}</li>
				</ul>
			</div>
		</div>
	)
}

export default CharactersInfo