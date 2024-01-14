import { useContext, useEffect } from 'react'
import { TodoContext } from '../context'

export default function useKeyboard(
	inputRef,
	ctrlKPressed,
	setCtrlKPressed,
	searchValue,
	setSearchValue
) {
	const { openModal, setOpenModal, setIsEditing } = useContext(TodoContext)

	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.keyCode === 27) {
				// ESC : Restablece el campo de búsqueda y quita el foco del input.
				event.preventDefault()
				setSearchValue('')
				inputRef.current.value = ''
				inputRef.current.blur()
				setOpenModal(false)
				setIsEditing(false)
			}

			if (event.ctrlKey && event.keyCode === 75) {
				// Ctrl + K: Fue presionado
				event.preventDefault()
				setCtrlKPressed(true)
			}

			if (event.ctrlKey && event.keyCode === 77) {
				// Ctrl + M: Fue presionado
				event.preventDefault()
				if (!openModal) setOpenModal(true)
			}
		}

		// Agrega un escucha de eventos de teclado al documento.
		document.addEventListener('keydown', handleKeyDown)

		// Limpia el escucha de eventos
		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [inputRef, ctrlKPressed, setCtrlKPressed, searchValue, setSearchValue])
}
