const initialState = {
	items: JSON.parse(localStorage.getItem('favorites')) || [],
}

const favorites = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_FAVORITE': {
			const item = state.items.find((item) => item.id === action.payload.id)

			if (!item) {
				return {
					...state,
					items: [action.payload, ...state.items],
				}
			} else {
				alert('Already added')
			}
		}

		case 'COMPLETE_FAVORITE': {
			const items = state.items.map((item) => item.id === action.payload ? {...item, complete: !item.complete} : {...item})

			return {
				...state,
				items,
			}
		}

		case 'REMOVE_FAVORITE': {
			const items = state.items.filter((item) => item.id !== action.payload)

			return {
				...state,
				items,
			}
		}

		case 'CLEAR_FAVORITES':
			localStorage.removeItem('favorites')

			return {
				...state,
				items: [],
			}

		default:
			return state
	}
};

export default favorites