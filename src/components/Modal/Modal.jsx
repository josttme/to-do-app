import { useContext } from 'react'
import { createPortal } from 'react-dom'
import { PropTypes } from 'prop-types'
import { TodoContext } from '../../context'

export default function Modal({ children }) {
	const { openModal, setOpenModal } = useContext(TodoContext)

	// Lógica para mostrar/ocultar
	if (!openModal) return null

	const closeModal = () => {
		setOpenModal(false)
	}
	return createPortal(
		<div
			onClick={closeModal}
			className="fixed inset-0 z-20 grid place-content-center bg-black/30"
		>
			<div onClick={(e) => e.stopPropagation()}>{children}</div>
		</div>,
		document.getElementById('modal')
	)
}

Modal.propTypes = {
	children: PropTypes.node.isRequired
}
