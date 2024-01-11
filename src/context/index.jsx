import { createContext, useState } from 'react'
import PropTypes from 'prop-types'
import { useLocalStorage } from '../hooks/useLocalStorage'

export const TodoContext = createContext()

export function TodoProvider({ children }) {
	const [todos, setSaveTodos] = useLocalStorage('TODOS_V1')
	const [searchValue, setSearchValue] = useState('')
	const [openModal, setOpenModal] = useState(false)

	// Cantidad de ToDos
	const totalTodos = todos?.length

	// Cantidad de ToDos completados
	const completedTodos = todos?.filter((todo) => !!todo.completed).length

	// Marcar como ToDo completado y guardar en el LocalStorage.
	const completeTodo = (text) => {
		const todoIndex = todos.findIndex((todo) => todo.text === text)
		const newTodos = [...todos]
		newTodos[todoIndex].completed = !newTodos[todoIndex].completed
		setSaveTodos(newTodos)
	}

	// Eliminar ToDo y guardar en el LocalStorage.
	const deleteTodo = (text) => {
		const newTodos = [...todos]
		const todoIndex = newTodos.findIndex((todo) => todo.text === text)
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
			text,
			completed: false
		})
		setSaveTodos(newTodos)
	}

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
		addTodo
	}

	return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}

TodoProvider.propTypes = {
	children: PropTypes.node.isRequired
}
