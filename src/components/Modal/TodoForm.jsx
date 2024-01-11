import React, { useEffect, useRef, useState } from 'react'

export default function TodoForm() {
	/* 	{
			submitLabel,
	label,
	submitEvent,
	defaultTodoText
	} */
	/* const [newTodoValue, setNewTodoValue] = useState(defaultTodoText || '') */
	const [textareaError, setTextareaError] = useState(false)
	const [messageError, setMessageError] = useState('')

	const textareaRef = useRef()
	const isDuplicateRef = useRef(false)

	useEffect(() => {
		textareaRef.current.focus()
	}, [])
	const handleChange = (e) => {
		/* 		setNewTodoValue(e.target.value) */
		textareaRef.current.setCustomValidity('')
		setTextareaError(false)
	}
	const handleCancel = () => {}
	const handleSubmit = (e) => {
		e.preventDefault()
		const newTodoValue = textareaRef.current.value
		const newTodoValueTrimmed = newTodoValue
		/*
      .replace(/^\s+|\s+$/g, '') // Eliminar espacios en blanco al principio y al final
      .replace(/\s{2,}/g, ' ') // Reemplazar más de 2 espacios con solo 1 espacio entre palabras
    const isDuplicate = todos.some(todo => todo.text === newTodoValueTrimmed)

    if (newTodoValueTrimmed === '' || newTodoValueTrimmed.length < 1 || isDuplicate) {
      isDuplicateRef.current = isDuplicate
      handleInvalid()
    } else {
      textareaRef.current.setCustomValidity('')
      */
		console.log(newTodoValueTrimmed)
		/* 	submitEvent(newTodoValueTrimmed) */
		/* } */
	}
	const handleKeyDown = (e) => {
		e.keyCode === 13 && !e.shiftKey && handleSubmit(e)
	}
	const handleInvalid = () => {
		const isDuplicate = isDuplicateRef.current

		const message = errorMessage(isDuplicate)
		setTextareaError(true)
		setMessageError(message)
	}
	const errorMessage = (isDuplicate) => {
		let message
		isDuplicate
			? (message = 'Esta tarea ya existe')
			: (message = 'Escribe una tarea')
		return message
	}
	const isTextareaError = `${
		textareaError && 'focus:border-error border-3 border-error'
	}`

	return (
		<form
			onSubmit={handleSubmit}
			className="mx-auto flex w-11/12 max-w-lg flex-col gap-2 rounded-lg bg-[#0236c5] p-4 "
		>
			<label
				htmlFor="newTodo"
				className="py-2 text-center text-2xl font-medium text-white"
			>
				Escribe tu nuevo TODO
			</label>
			<textarea
				className={`w-full  rounded-lg border-4 bg-white/90 px-3 py-2 leading-tight text-gray-700  focus:border-blue-400  focus:outline-none ${isTextareaError}`}
				style={{ maxHeight: '200px', minHeight: '100px' }}
				id="newTodo"
				name="todoText"
				// value={newTodoValue}
				onChange={handleChange}
				onKeyDown={handleKeyDown}
				onInvalid={handleInvalid}
				cols="30"
				rows="10"
				placeholder="Escribe tu tarea aquí..."
				ref={textareaRef}
			/>
			<div className="flex justify-between gap-5 py-1">
				<button
					className="w-full transform rounded-lg bg-blue-600 px-6 py-2 text-lg font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
					onClick={handleCancel}
					type="button"
				>
					Cancel
				</button>
				<button
					className="w-full transform rounded-lg bg-blue-600 px-6 py-2 text-lg font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
					type="submit"
				>
					Agregar
				</button>
			</div>
			<div
				className={`grid min-h-[30px] place-content-center rounded-lg text-center text-xl font-medium text-red-950 ${
					messageError && 'bg-error'
				}`}
			>
				{messageError}
			</div>
		</form>
	)
}
