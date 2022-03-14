import './Character.scss';

const CharactersCard = ({ id, name, status, species, gender, image, setCharactersInfo }) => {
	return (
		<div className="characters-list-col">
			<div className="character" onClick={() => setCharactersInfo(id)}>
				<div className="character-photo">
					<div className={`status status-${status.toLowerCase()}`}>{status}</div>
					<img src={image} alt={name} />
				</div>
				<div className="character-meta">
					<div className="attributes">
						<span className="attributes-item">{species}</span>
						<span className="attributes-item">{gender}</span>
					</div>
					<h3 className="name">{name}</h3>
				</div>
			</div>
		</div>
	)
}

export default CharactersCard