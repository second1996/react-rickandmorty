import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEpisodes, setEpisodes, setEpisodesIsError } from '../../redux/actions/episodes'
import { setFavorite } from '../../redux/actions/favorites'

import useDebounce from '../../hooks/useDebounce'

import FavoriteSearchItem from './FavoriteSearchItem'
import FavoriteSearchForm from './FavoriteSearchForm'

const FavoriteSearch = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const [toggleResults, setToggleResults] = useState(false)
	const searchRef = useRef()

	const dispatch = useDispatch()
	const { items, isLoading, isError } = useSelector(({ episodes }) => episodes)

	const debouncedSearchTerm = useDebounce(searchTerm, 300)

	useEffect(() => {
		if (debouncedSearchTerm) {
			dispatch(fetchEpisodes(debouncedSearchTerm))
		} else {
			dispatch(setEpisodes([]))
			dispatch(setEpisodesIsError(false))
		}
	}, [debouncedSearchTerm])

	useEffect(() => {
		document.addEventListener('click', toggleSearchResults)

		return () => {
			document.removeEventListener('click', toggleSearchResults)
		}
	}, [])

	const toggleSearchResults = (e) => {
    if (!e.path.includes(searchRef.current)) {
			setToggleResults(false)
    }
  }

	const onAddToFavorite = (item) => {
		dispatch(setFavorite(item))
		setSearchTerm('')
		setToggleResults(false)
	}

	return (
		<div ref={searchRef} className="favorite-search">
			<FavoriteSearchForm
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
				isLoading={isLoading}
				setToggleResults={setToggleResults}
			/>
			<div className={toggleResults ? 'favorite-search-results favorite-search-results--shown' : 'favorite-search-results'}>
			{items.length > 0 && !isLoading ?
				<div className="favorite-search-results-list">
					{items.map(({ id, name, episode }) => (
						<FavoriteSearchItem
							key={id}
							id={id}
							complete={false}
							name={name}
							episode={episode}
							onAddToFavorite={onAddToFavorite}
						/>
					))}
				</div>
				: isError && <h4 className="favorite-search-results-error">Nothing found.</h4>
			}
			</div>
		</div>
	)
}

export default FavoriteSearch