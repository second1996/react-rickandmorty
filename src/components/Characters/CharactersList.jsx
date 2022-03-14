import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchCharacters } from '../../redux/actions/characters'

import { CharactersInfo, CharactersCard, Pagination, Modal } from '../'

const CharactersList = () => {
	const [openModal, setOpenModal] = useState(false)
	const [character, setCharacter] = useState(null)

	const dispatch = useDispatch()
	const { items, isLoading, pages, currentPage} = useSelector(({ characters }) => characters)
	const filters = useSelector(({ filters }) => filters)

	useEffect(() => {
		dispatch(fetchCharacters(currentPage, filters))
	}, [currentPage, filters])

	const setCharactersInfo = (id) => {
		const findCharacter = items.filter(item => item.id === id)

		setCharacter(findCharacter)
		setOpenModal(true)
	}

	return (
		<>
			<div className="characters-list">
				{isLoading
					?	<h2 style={{flexBasis: "100%", textAlign: "center"}}>Loading..</h2>
					:	items.length === 0
						? <h2 style={{flexBasis: "100%", textAlign: "center"}}>No characters found :c</h2>
						: items.map(({ id, image, name, status, species, gender }) => (
							<CharactersCard
								key={id}
								id={id}
								image={image}
								name={name}
								status={status}
								species={species}
								gender={gender}
								setCharactersInfo={setCharactersInfo}
							/>
						))
				}
			</div>
			<Pagination pages={pages} currentPage={currentPage} />
			<Modal openModal={openModal} setOpenModal={setOpenModal}>
				{character && <CharactersInfo character={character} />}
			</Modal>
		</>
	)
}

export default CharactersList