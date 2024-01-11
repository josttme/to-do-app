// useTodoForm.js
import { useContext, useState, useRef, useEffect } from 'react'
import { TodoContext } from '../context'

export const useTodoForm = () => {
	const { todos, setOpenModal, addTodo } = useContext(TodoContext)
	const [newTodoValue, setNewTodoValue] = useState('')
	const [textareaBorderError, setTextareaBorderError] = useState(false)
	const [messageError, setMessageError] = useState('')

	const textArea = useRef()
	const isDuplicateRef = useRef(false)

	// Hace focus en el textarea al abrir el modal.
	useEffect(() => {
		textArea.current.focus()
	}, [])

	// Manejador del texto al Agregar un ToDo
	const handleSubmit = (e) => {
		e.preventDefault()

		// 1) Eliminar espacios en blanco al principio y al final
		// 2) Reemplazar más de 2 espacios con solo 1 espacio entre palabras
		const sanitizedNewTodoValue = newTodoValue
			.replace(/^\s+|\s+$/g, '') // 1
			.replace(/\s{2,}/g, ' ') // 2

		// Veridica si ya existe una tarea con el mismo texto (true o false).
		const isDuplicateTodo = todos.some(
			(todo) => todo.text === sanitizedNewTodoValue
		)

		// verifica si el input esta vacio o tiene menos de 1 caracter y si ya existe una tarea con el mismo texto.
		if (
			sanitizedNewTodoValue === '' ||
			sanitizedNewTodoValue.length < 1 ||
			isDuplicateTodo
		) {
			// Cambia el valor de la referencia isDuplicateRef a true si ya existe una tarea con el mismo texto.
			isDuplicateRef.current = isDuplicateTodo
			// Llama a la función handleTodoDuplicated() para mostrar el mensaje de error.
			handleTodoDuplicated(isDuplicateTodo)
		} else {
			// Agrega la tarea al arreglo de tareas en locaStorage.
			addTodo(newTodoValue)
			// Resetea el valor del Modal para cerrarlo.
			setOpenModal(false)
		}
	}

	// Manejador de tarea duplicada.
	const handleTodoDuplicated = (isDuplicateTodo) => {
		const message = generateErrorMessage(isDuplicateTodo)
		setTextareaBorderError(true)
		setMessageError(message)
	}

	// Genera el mensaje de error según si la tarea es duplicada o si el campo está vacío.
	const generateErrorMessage = (isDuplicate) => {
		return isDuplicate ? 'La tarea ya existe' : 'Escribe una tarea'
	}

	// Manejador del boton Cancelar, resetea el valor del Modal para cerrarlo.
	const onCancel = () => {
		setOpenModal(false)
	}

	// Manejador del cambio de texto en el textarea.
	const onChange = (e) => {
		setNewTodoValue(e.target.value)
		setTextareaBorderError(false)
	}

	function handleKeyDown(e) {
		if (e.key === 'Enter') {
			handleSubmit(e)
		}
	}
	return {
		messageError,
		textArea,
		handleSubmit,
		onCancel,
		onChange,
		textareaBorderError,
		handleKeyDown
	}
}
