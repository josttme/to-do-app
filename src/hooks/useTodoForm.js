// useTodoForm.js
import { useContext, useState, useRef, useEffect } from 'react'
import { TodoContext } from '../context'

export const useTodoForm = () => {
	const {
		todos,
		setOpenModal,
		addTodo,
		isEditing,
		idTodo,
		editTodo,
		setIsEditing,
		textTodo
	} = useContext(TodoContext)
	const [newTodoValue, setNewTodoValue] = useState(textTodo)
	const [textareaBorderError, setTextareaBorderError] = useState(false)
	const [messageError, setMessageError] = useState('')

	const textArea = useRef()

	// Hace focus en el textarea al abrir el modal.
	useEffect(() => {
		textArea.current.focus()
	}, [])

	// 1) Eliminar espacios en blanco al principio y al final
	// 2) Reemplazar más de 2 espacios con solo 1 espacio entre palabras
	const sanitizeText = (text) => {
		return text.replace(/^\s+|\s+$/g, '').replace(/\s{2,}/g, ' ')
	}

	// Veridica si ya existe una tarea con el mismo texto (true o false).
	const isTextDuplicate = (todos, text) => {
		return todos.some((todo) => todo.text === text)
	}

	// Veridica si ya existe una tarea con el mismo texto que no pertenezca al texto que se esta editando para poder guardar el mismo texto si no se edita.
	const isTextDuplicateWithDifferentId = (todos, text, id) => {
		return todos.filter((t) => t.id !== id).some((t) => t.text === text)
	}

	// Manejador del texto al Agregar un ToDo
	const handleSubmit = (e) => {
		e.preventDefault()

		// Texto sin espacios en blanco
		const sanitizedText = sanitizeText(newTodoValue)

		// Comprobar si hay texto duplicado
		const isDuplicate = isTextDuplicate(todos, sanitizedText)

		const isEditingAllowed =
			isEditing && !isTextDuplicateWithDifferentId(todos, sanitizedText, idTodo)

		if (!sanitizedText || (isDuplicate && !isEditingAllowed)) {
			handleErrory(isTextDuplicate)
		} else {
			isEditing ? editTodo(idTodo, sanitizedText) : addTodo(sanitizedText)
			setOpenModal(false)
			setIsEditing(false)
		}
	}

	// Manejador de tarea duplicada.
	const handleErrory = (isTextDuplicate) => {
		const message = generateErrorMessage(isTextDuplicate)
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
		setIsEditing(false)
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

	const textButton = isEditing ? 'Editar' : 'Agregar'
	const titleForm = isEditing ? 'Editar TODO' : 'Agregar un nuevo ToDo'

	return {
		messageError,
		textArea,
		handleSubmit,
		onCancel,
		onChange,
		textareaBorderError,
		handleKeyDown,
		textButton,
		titleForm,
		textTodo
	}
}
