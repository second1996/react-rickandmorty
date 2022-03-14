import { setGender } from '../../redux/actions/filters'

import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

const items = [
	'All',
	'Female',
	'Male',
	'Genderless',
	'Unknown'
]

const Gender = ({ onChangeFilter, activeFilter }) => {
	return (
		<Dropdown 
			options={items}
			onChange={(data) => {
				onChangeFilter(setGender(data.value))
			}}
			value={activeFilter ? activeFilter : 'Gender'} 
			placeholder="Select a gender"
		/>
	)
}

export default Gender