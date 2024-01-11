import { PropTypes } from 'prop-types'

export function TodoList({ children }) {
	return (
		<ul className="ml-auto mr-auto grid min-h-[70px] w-11/12 max-w-lg items-center gap-4 rounded-lg bg-[#011399] p-3 text-center">
			{children}
		</ul>
	)
}

TodoList.propTypes = {
	children: PropTypes.node.isRequired
}
