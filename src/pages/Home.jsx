import { Filters } from '../components'
import CharactersList from '../components/Characters/CharactersList'

function Home() {
	return (
		<>
			<section className="characters">
				<div className="container">
					<Filters />
					<CharactersList />
				</div>
			</section>
		</>
	)
}

export default Home