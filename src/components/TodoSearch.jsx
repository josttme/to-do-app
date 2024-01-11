import { useContext, useEffect, useRef, useState } from 'react'
import { PropTypes } from 'prop-types'
import { TodoContext } from '../context'
import useKeyboard from '../hooks/useKeyboad'

export function TodoSearch() {
	const { searchValue, setSearchValue } = useContext(TodoContext)
	const [ctrlKPressed, setCtrlKPressed] = useState(false)
	const inputRef = useRef()

	useKeyboard(
		inputRef,
		ctrlKPressed,
		setCtrlKPressed,
		searchValue,
		setSearchValue
	)
	// Escucha cada tecla presionada y actualiza el valor del input.
	const onSearchValueChange = (e) => {
		setSearchValue(e.target.value)
	}

	// Si se presiona Ctrl + K y el input no está activo, se activa el input.
	useEffect(() => {
		if (ctrlKPressed && inputRef.current !== document.activeElement) {
			inputRef.current.focus()
		}
	}, [ctrlKPressed])

	// Quita el foco del input
	const handleBlur = () => {
		setCtrlKPressed(false)
	}
	return (
		<div className="focus-within  ml-auto mr-auto grid  h-12 w-10/12 max-w-lg items-center  overflow-hidden rounded-3xl border-2 border-transparent bg-[#0236c5] p-2  focus-within:border-blue-400 focus-within:outline-none">
			<div className="relative flex items-center">
				<span className="absolute left-3">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="h-6 w-6"
					>
						<path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
					</svg>
				</span>
				<input
					type="text"
					placeholder="Buscar tarea..."
					value={searchValue}
					onChange={onSearchValueChange}
					ref={inputRef}
					onBlur={handleBlur}
					className="block h-7 w-full bg-[#0236c5] py-3 pl-12  pr-5 placeholder-white/60 selection:bg-[#b131e9]  focus:outline-none disabled:opacity-50 lg:pr-[5rem]"
				/>
				<div className="absolute inset-y-0 right-3 hidden  items-center lg:flex">
					<kbd className="inline-flex items-center rounded-md border px-[5px]  py-[5px]  font-sans text-sm  text-white opacity-70">
						Ctrl + K
					</kbd>
				</div>
			</div>
		</div>
	)
}

TodoSearch.propTypes = {
	searchValue: PropTypes.string,
	setSearchValue: PropTypes.func
}
