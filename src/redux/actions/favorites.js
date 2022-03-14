export const setFavorite = (item) => ({
	type: 'SET_FAVORITE',
	payload: item,
})

export const completeFavorite = (id) => ({
	type: 'COMPLETE_FAVORITE',
	payload: id,
})

export const removeFavorite = (id) => ({
	type: 'REMOVE_FAVORITE',
	payload: id,
})

export const clearFavorites = () => ({
	type: 'CLEAR_FAVORITES',
})