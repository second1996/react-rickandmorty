const initialState = {
	status: null,
	species: null,
	gender: null,
}

const filters = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_STATUS':
			return {
				...state,
				status: action.payload,
			}

		case 'SET_SPECIES':
			return {
				...state,
				species: action.payload,
			}

		case 'SET_GENDER':
			return {
				...state,
				gender: action.payload,
			}

		case 'SET_EMPTY_FILTERS':
			return {
				...state,
				status: null,
				species: null,
				gender: null,
			}

		default:
			return state
	}
}

export default filters