import { PropTypes } from 'prop-types'
import { useContext } from 'react'
import { TodoContext } from '../context'

export function TodoCounter() {
	const { completedTodos, totalTodos } = useContext(TodoContext)
	return (
		<h2 className="pb-5  pt-10 text-center text-lg text-white">
			Has completado{' '}
			<span className="text-xl font-bold text-[#00de49]">
				{completedTodos}{' '}
			</span>
			de <span className="text-xl font-bold text-[#05a4ff]">{totalTodos}</span>{' '}
			TODOs
		</h2>
	)
}
TodoCounter.propTypes = {
	completedTodos: PropTypes.number,
	totalTodos: PropTypes.number
}
