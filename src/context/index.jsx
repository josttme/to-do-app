import { createContext } from 'react'
import PropTypes from 'prop-types'
import { useLocalStorage } from '../hooks/useLocalStorage'

export const TodoContext = createContext()

export function TodoProvider({ children }) {
	const [todos, setSaveTodos] = useLocalStorage('TODOS_V1')

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

	const value = {
		todos,
		totalTodos,
		completedTodos,
		completeTodo,
		deleteTodo
	}

	return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}

TodoProvider.propTypes = {
	children: PropTypes.node.isRequired
}
