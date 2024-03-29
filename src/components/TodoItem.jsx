import { PropTypes } from 'prop-types'
export function TodoItem({ text, completed, onComplete, onDelete, onEdit }) {
	const isCompletedText = `text-white text-center  text-white/80 text-center' ${
		completed && 'line-through decoration-[#b131e9] decoration-3'
	}`
	const isCompletedChecked = `w-7 h-7  ${
		completed
			? 'stroke-[#00de49] lg:hover:stroke-[#00de49]'
			: 'stroke-[#05a4ff] lg:hover:stroke-yellow-500'
	}`
	return (
		<li className="grid min-h-[50px] w-full  grid-cols-item items-center justify-items-center rounded-lg bg-[#0236c5] py-1 ">
			<span className="cursor-pointer" onClick={onComplete}>
				<svg
					className={isCompletedChecked}
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			</span>
			<p className={isCompletedText}>{text}</p>
			<span className="cursor-pointer" onClick={onEdit}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.7}
					className="h-6 w-6 stroke-[#05a4ff] hover:stroke-[#c12df4]"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
					/>
				</svg>
			</span>
			<span className="cursor-pointer" onClick={onDelete}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					className="h-7 w-7 stroke-[#05a4ff] hover:stroke-red-500"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
					/>
				</svg>
			</span>
		</li>
	)
}

TodoItem.propTypes = {
	text: PropTypes.string.isRequired,
	completed: PropTypes.bool,
	onComplete: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired,
	onEdit: PropTypes.func.isRequired
}
