import { useEffect } from 'react'

export default function useKeyboard(
	inputRef,
	ctrlKPressed,
	setCtrlKPressed,
	searchValue,
	setSearchValue
) {
	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.keyCode === 27) {
				// ESC : Restablece el campo de búsqueda y quita el foco del input.
				event.preventDefault()
				setSearchValue('')
				inputRef.current.value = ''
				inputRef.current.blur()
			}

			if (event.ctrlKey && event.keyCode === 75) {
				// Ctrl + K: Fue presionado
				event.preventDefault()
				setCtrlKPressed(true)
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
