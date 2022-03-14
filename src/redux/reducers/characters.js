const initialState = {
	items: [],
	isLoading: true,
	pages: 1,
	currentPage: 1,
}

const characters = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_CHARACTERS':
			return {
				...state,
				items: action.payload,
				isLoading: false,
			}

		case 'SET_CHARACTERS_IS_LOADING':
			return {
				...state,
				isLoading: action.payload,
			}

		case 'SET_CHARACTERS_PAGES':
			return {
				...state,
				pages: action.payload,
			}

		case 'SET_CHARACTERS_CURRENT_PAGE':
			return {
				...state,
				currentPage: action.payload,
			}

		default:
			return state
	}
};

export default characters