import { combineReducers } from 'redux'

import characters from './characters'
import episodes from './episodes'
import favorites from './favorites'
import filters from './filters'

const rootReducer = combineReducers({
	characters,
	episodes,
	favorites,
	filters,
})

export default rootReducer