import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import { useLocalStorage } from '../hooks/useLocalStorage'
import confetti from 'canvas-confetti'

export const TodoContext = createContext()

export function TodoProvider({ children }) {
	const [todos, setSaveTodos] = useLocalStorage('TODOS_V1')
	const [searchValue, setSearchValue] = useState('')
	const [openModal, setOpenModal] = useState(false)
	const [isEditing, setIsEditing] = useState(false)
	const [textTodo, setTextTodo] = useState('')
	const [idTodo, setIdTodo] = useState(null)
	const [isAllTodosCompleted, setIsallTodosCompleted] = useState(false)

	// Cantidad de ToDos
	const totalTodos = todos?.length

	// Cantidad de ToDos completados
	const completedTodos = todos?.filter((todo) => !!todo.completed).length

	// Compreba que todos los ToDos estén completados y ejecuta la función confetti.
	const allTodosCompleted =
		todos.length !== 0 && todos?.every((t) => t.completed)
	useEffect(() => {
		if (allTodosCompleted) {
			confetti()
			setIsallTodosCompleted(true)
		} else {
			setIsallTodosCompleted(false)
		}
	}, [allTodosCompleted])

	// Marcar como ToDo completado y guardar en el LocalStorage.
	const completeTodo = (id) => {
		const todoIndex = todos.findIndex((todo) => todo.id === id)
		const newTodos = [...todos]
		newTodos[todoIndex].completed = !newTodos[todoIndex].completed
		setSaveTodos(newTodos)
	}

	// Eliminar ToDo y guardar en el LocalStorage.
	const deleteTodo = (id) => {
		const newTodos = [...todos]
		const todoIndex = newTodos.findIndex((todo) => todo.id === id)
		newTodos.splice(todoIndex, 1)
		setSaveTodos(newTodos)
	}

	// Buscar ToDo.
	const searchedTodos = todos.filter((todo) => {
		// función texto sin tildes
		const noTildes = (text) => {
			return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
		}
		// Normalizando texto sin tildes y a Lower Case
		const TodoTextLC = noTildes(todo.text.toLowerCase())
		const searchTextLC = noTildes(searchValue.toLowerCase())

		return TodoTextLC.includes(searchTextLC)
	})

	// Agregar ToDo y guardar en el LocalStorage.
	const addTodo = (text) => {
		const newTodos = [...todos]
		newTodos.push({
			id: uuidv4(),
			text,
			completed: false
		})
		setSaveTodos(newTodos)
	}

	const editTodo = (id, text) => {
		const newTodos = [...todos]
		const todoIndex = newTodos.findIndex((todo) => todo.id === id)
		newTodos[todoIndex].text = text
		setSaveTodos(newTodos)
		setIdTodo(null)
	}
	useEffect(() => {
		if (openModal) setTextTodo('')
	}, [openModal])

	const value = {
		todos,
		totalTodos,
		completedTodos,
		completeTodo,
		deleteTodo,
		searchedTodos,
		setSearchValue,
		openModal,
		setOpenModal,
		addTodo,
		isEditing,
		setIsEditing,
		idTodo,
		setIdTodo,
		editTodo,
		textTodo,
		setTextTodo,
		isAllTodosCompleted,
		setIsallTodosCompleted
	}

	return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}

TodoProvider.propTypes = {
	children: PropTypes.node.isRequired
}
