import { PropTypes } from 'prop-types'

export function TodoCounter({ completed, total }) {
	return (
		<h2 className="pb-5  pt-10 text-center text-lg text-white">
			Has completado{' '}
			<span className="text-xl font-bold text-[#00de49]">{completed} </span>
			de <span className="text-xl font-bold text-[#05a4ff]">{total}</span> TODOs
		</h2>
	)
}
TodoCounter.propTypes = {
	total: PropTypes.number.isRequired,
	completed: PropTypes.number.isRequired
}
