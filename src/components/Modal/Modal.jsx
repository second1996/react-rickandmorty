import { useEffect, useRef } from 'react'
import './Modal.scss'

const Modal = ({ openModal, setOpenModal, children }) => {
	const modalRef = useRef()

	useEffect(() => {
		document.addEventListener('click', handleOutsideClick)

		return () => {
			document.removeEventListener('click', handleOutsideClick)
		}
	}, [])

	const handleOutsideClick = (e) => {
    if (e.target === modalRef.current) {
			setOpenModal(false)
    }
  }

	return (
		<div ref={modalRef} className={openModal ? 'modal active' : 'modal'}>
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-heading">
						<h3 className="modal-heading-title">Character Info</h3>
						<button className="modal-heading-close" onClick={() => setOpenModal(!openModal)}>&times;</button>
					</div>
					<div className="modal-body">
						{children}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Modal