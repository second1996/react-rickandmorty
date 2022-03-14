import axios from "axios"

export const fetchCharacters = (page = 1, filters) => (dispatch) => {
	const { status, species, gender } = filters
	
	dispatch(setCharactersIsLoading(true))

	axios
		.get(`
			https://rickandmortyapi.com/api/character/?page=${page}
			${status ? `&status=${status === 'All' ? '' : status.toLowerCase()}` : ''}
			${species ? `&species=${species === 'All' ? '' : species.toLowerCase()}` : ''}
			${gender ? `&gender=${gender === 'All' ? '' : gender.toLowerCase()}` : ''}
		`)
		.then(({ data }) => {
			setTimeout(() => {
				dispatch(setCharacters(data.results))
				dispatch(setCharactersPages(data.info.pages))
			}, 300);
		})
		.catch((error) => {
			console.error(error)

			dispatch(setCharactersIsLoading(false))
			dispatch(setCharacters([]))
			dispatch(setCharactersPages(1))
		})
}

export const setCharacters = (items) => ({
	type: 'SET_CHARACTERS',
	payload: items,
})

export const setCharactersIsLoading = (bool) => ({
	type: 'SET_CHARACTERS_IS_LOADING',
	payload: bool,
})

export const setCharactersPages = (pages) => ({
	type: 'SET_CHARACTERS_PAGES',
	payload: pages,
})

export const setCharactersCurrentPage = (page) => ({
	type: 'SET_CHARACTERS_CURRENT_PAGE',
	payload: page,
})
