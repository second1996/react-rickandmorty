import { useDispatch } from 'react-redux'
import { setCharactersCurrentPage } from '../../redux/actions/characters'

import ReactPaginate from 'react-paginate'

import './Pagination.scss'

const Pagination = ({ pages, currentPage }) => {
	const dispatch = useDispatch()

	return (
		<div className="pagination">
			<ReactPaginate
				pageCount={pages}
				marginPagesDisplayed={1}
				forcePage={currentPage - 1}
				onPageChange={(data) => {
					dispatch(setCharactersCurrentPage(data.selected + 1))
				}}
				className="pagination-list"
				pageClassName="pagination-item"
				pageLinkClassName="pagination-link"
				breakClassName="pagination-item pagination-break"
				previousClassName="pagination-item"
				previousLinkClassName="pagination-link pagination-link-prev"
				nextClassName="pagination-item"
				nextLinkClassName="pagination-link pagination-link-next"
				activeLinkClassName="pagination-link pagination-link-current"
				previousLabel="Prev"
			/>
		</div>
	)
}

export default Pagination