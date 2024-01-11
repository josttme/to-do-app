import { useTodoForm } from '../../hooks/useTodoForm'

export default function TodoForm() {
	const {
		messageError,
		textArea,
		handleSubmit,
		onCancel,
		onChange,
		textareaBorderError,
		handleKeyDown
	} = useTodoForm()

	const stylesTextareaError = `${
		textareaBorderError && 'focus:border-[#e04448] border-3 border-[#e04448]'
	}`
	return (
		<form
			onSubmit={handleSubmit}
			className="mx-auto flex w-11/12 max-w-lg flex-col gap-2  rounded-lg bg-[#0236c5] p-4 "
		>
			<label
				htmlFor="newTodo"
				className="py-2 text-center text-2xl font-medium text-white"
			>
				Escribe tu nuevo TODO
			</label>
			<textarea
				className={`w-full  rounded-lg border-4 bg-white/90 px-3 py-2 leading-tight text-gray-700  focus:border-blue-400  focus:outline-none ${stylesTextareaError}`}
				style={{ maxHeight: '200px', minHeight: '100px' }}
				id="newTodo"
				name="todoText"
				cols="30"
				rows="10"
				placeholder="Escribe tu tarea aquí..."
				onChange={onChange}
				ref={textArea}
				onKeyDown={handleKeyDown}
			/>
			<div className="flex justify-between gap-5 py-1">
				<button
					className="w-full transform rounded-lg bg-blue-600 px-6 py-2 text-lg font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
					onClick={onCancel}
					type="button"
				>
					Cancel
				</button>
				<button
					className="w-full transform rounded-lg bg-blue-600 px-6 py-2 text-lg font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
					type="submit"
				>
					Agregar
				</button>
			</div>
			<div
				className={`grid min-h-[30px] place-content-center rounded-lg text-center text-xl font-medium text-red-950 ${
					messageError && 'bg-[#e04448]'
				}`}
			>
				{messageError}
			</div>
		</form>
	)
}
