const initialState = {
	items: [],
	isLoading: false,
	isError: false,
}

const episodes = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_EPISODES':
			return {
				...state,
				items: action.payload,
				isLoading: false,
			}

		case 'SET_EPISODES_IS_LOADING':
			return {
				...state,
				isLoading: action.payload,
			}

		case 'SET_EPISODES_IS_ERROR':
			return {
				...state,
				isError: action.payload,
			}

		default:
			return state
	}
};

export default episodes