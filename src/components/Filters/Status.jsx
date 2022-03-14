import { setStatus } from '../../redux/actions/filters'

import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

const items = [
	'All',
	'Alive',
	'Dead',
	'Unknown'
]

const Status = ({ onChangeFilter, activeFilter }) => {
	return (
		<Dropdown 
			options={items}
			onChange={(data) => {
				onChangeFilter(setStatus(data.value))
			}}
			value={activeFilter ? activeFilter : 'Status'} 
			placeholder="Select a status"
		/>
	)
}

export default Status