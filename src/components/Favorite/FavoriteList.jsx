import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { completeFavorite, removeFavorite, clearFavorites } from '../../redux/actions/favorites'

import FavoriteCard from './FavoriteCard'

const FavoriteList = () => {
	const dispatch = useDispatch()
	const { items } = useSelector(({ favorites }) => favorites)

	useEffect(() => {
		localStorage.setItem('favorites', JSON.stringify(items))
	}, [items])

	const onComplete = (id) => {
		dispatch(completeFavorite(id))
	}

	const onRemove = (id) => {
		dispatch(removeFavorite(id))
	}

	return (
		<>
			<div className="favorite-list">
				{items.length
					? items.map(({ id, complete, name, episode }) => (
						<FavoriteCard
							key={id}
							id={id}
							complete={complete}
							name={name}
							episode={episode}
							onComplete={onComplete}
							onRemove={onRemove}
						/>
					))
					: <h3 className="favorite-list-empty">Empty :c</h3>
				}
			</div>
			{items.length > 0 &&
				<div className="favorite-clear">
					<button className="favorite-clear-btn btn" onClick={() => dispatch(clearFavorites())}>Clear Watch list</button>
				</div>
			}
		</>
	)
}

export default FavoriteList