import { createContext } from 'react'
import PropTypes from 'prop-types'

export const TodoContext = createContext()

export function TodoProvider({ children }) {
	const valueContext = {}
	return (
		<TodoContext.Provider value={valueContext}>{children}</TodoContext.Provider>
	)
}

TodoProvider.propTypes = {
	children: PropTypes.node.isRequired
}
