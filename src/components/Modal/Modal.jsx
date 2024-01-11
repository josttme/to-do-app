import { useRef } from 'react'
import { createPortal } from 'react-dom'

export default function Modal({ children, setOpenModal }) {
	const modalRef = useRef()

	const closeModal = () => {
		setOpenModal(false)
	}
	return createPortal(
		<div
			ref={modalRef}
			onClick={closeModal}
			className="fixed inset-0 z-20 grid place-content-center bg-black/30"
		>
			<div onClick={(e) => e.stopPropagation()}>{children}</div>
		</div>,
		document.getElementById('modal')
	)
}
