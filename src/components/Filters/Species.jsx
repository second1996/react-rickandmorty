import { setSpecies } from '../../redux/actions/filters'

import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

const items = [
	'All',
	'Human',
	'Alien',
	'Humanoid',
	'Poopybutthole',
	'Mythological',
	'Unknown',
	'Animal',
	'Disease',
	'Robot',
	'Cronenberg',
	'Planet'
]

const Species = ({ onChangeFilter, activeFilter }) => {
	return (
		<Dropdown 
			options={items}
			onChange={(data) => {
				onChangeFilter(setSpecies(data.value))
			}}
			value={activeFilter ? activeFilter : 'Species'} 
			placeholder="Select a species"
		/>
	)
}

export default Species