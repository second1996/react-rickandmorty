import axios from "axios"

export const fetchEpisodes = (name = '') => (dispatch) => {
	dispatch(setEpisodesIsLoading(true))

	axios
		.get(`https://rickandmortyapi.com/api/episode/?name=${name}`)
		.then(({ data }) => {
			setTimeout(() => {
				dispatch(setEpisodesIsError(false))
				dispatch(setEpisodes(data.results))
			}, 1000);
		})
		.catch((error) => {
			console.error(error)

			setTimeout(() => {
				dispatch(setEpisodesIsError(true))
				dispatch(setEpisodes([]))
			}, 1000);
		})
}

export const setEpisodes = (items) => ({
	type: 'SET_EPISODES',
	payload: items,
})

export const setEpisodesIsLoading = (bool) => ({
	type: 'SET_EPISODES_IS_LOADING',
	payload: bool,
})

export const setEpisodesIsError = (bool) => ({
	type: 'SET_EPISODES_IS_ERROR',
	payload: bool,
})