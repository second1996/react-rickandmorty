import { useDispatch, useSelector } from 'react-redux'
import { setEmptyFilters } from '../../redux/actions/filters'
import { setCharactersCurrentPage } from '../../redux/actions/characters'

import { Status, Species, Gender } from './'
import './Filters.scss'

const Filters = () => {
	const dispatch = useDispatch()
	const { status, species, gender } = useSelector(({ filters }) => filters)

	const fetchCharacters = (actionFilter) => {
		dispatch(actionFilter)
		dispatch(setCharactersCurrentPage(1))
	}

	const onClearFilters = () => {
		dispatch(setEmptyFilters())
	}

	return (
		<div className="characters-filters filters">
			<div className="filters-heading">
				<h3 className="filters-heading-title">
					<svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M3.853 54.87C10.47 40.9 24.54 32 40 32H472C487.5 32 501.5 40.9 508.1 54.87C514.8 68.84 512.7 85.37 502.1 97.33L320 320.9V448C320 460.1 313.2 471.2 302.3 476.6C291.5 482 278.5 480.9 268.8 473.6L204.8 425.6C196.7 419.6 192 410.1 192 400V320.9L9.042 97.33C-.745 85.37-2.765 68.84 3.854 54.87L3.853 54.87z"/></svg>
					<span>Filters</span>
				</h3>
				{(status || species || gender) && <button className="filters-heading-btn btn btn-gray" onClick={onClearFilters}>Clear filters</button>}
			</div>
			<div className="filters-list">
				<div className="filters-item">
					<Status onChangeFilter={fetchCharacters} activeFilter={status} />
				</div>
				<div className="filters-item">
					<Species onChangeFilter={fetchCharacters} activeFilter={species} />
				</div>
				<div className="filters-item">
					<Gender onChangeFilter={fetchCharacters} activeFilter={gender} />
				</div>
			</div>
		</div>
	)
}

export default Filters