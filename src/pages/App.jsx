import { useContext } from 'react'
import { TodoTitle } from '../components/TodoTitle'
import { TodoSearch } from '../components/TodoSearch'
import { TodoList } from '../components/TodoList'
import { TodoItem } from '../components/TodoItem'
import { TodoButtonCreate } from '../components/TodoButtonCreate'
import { TodoContext } from '../context/index'
import Modal from '../components/Modal/Modal'
import TodoForm from '../components/Modal/TodoForm'
import { TodoCounter } from '../components/TodoCounter'

export function App() {
	const {
		searchedTodos,
		completeTodo,
		deleteTodo,
		setOpenModal,
		setIsEditing,
		setIdTodo,
		setTextTodo,
		isAllTodosCompleted,
		setIsallTodosCompleted
	} = useContext(TodoContext)
	return (
		<>
			<div className="absolute right-0 top-2 z-10 lg:left-10 lg:top-5">
				<a
					href="https://github.com/josttme/to-do-app"
					target="_blank"
					className="mb-2 me-2 inline-flex items-center rounded-lg bg-[#24292F] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#24292F]/50"
					rel="noreferrer"
				>
					<svg
						className="me-2 h-4 w-4"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path
							fillRule="evenodd"
							d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
							clipRule="evenodd"
						/>
					</svg>
					Gitub Code
				</a>
			</div>
			<section className=" relative text-center text-white">
				<div className=" mx-auto mb-10 grid h-14  w-11/12 max-w-lg place-items-center lg:relative">
					<TodoTitle />
					<TodoButtonCreate />
				</div>

				<TodoSearch />
				<TodoCounter />

				<TodoList>
					{searchedTodos?.length > 0 ? (
						searchedTodos.map(({ id, text, completed }) => (
							<TodoItem
								key={id}
								text={text}
								completed={completed}
								onComplete={() => completeTodo(id)}
								onDelete={() => deleteTodo(id)}
								onEdit={() => {
									setOpenModal(true)
									setIsEditing(true)
									setIdTodo(id)
									setTextTodo(text)
								}}
							/>
						))
					) : (
						<p className="opacity-70">No hay tareas. Agrega una nueva tarea.</p>
					)}
				</TodoList>
				{isAllTodosCompleted && (
					<div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center">
						<div className="absolute mx-auto flex w-11/12 max-w-md flex-col gap-2 rounded-lg border-2  border-[#00af48] bg-[#040331] p-4">
							<span className="px-2 py-5 text-center text-xl text-[#05a4ff]">
								¡Felicidades! Has completado todas tus tareas. 😳
							</span>
							<button
								type="button"
								aria-label="Close"
								className="absolute right-1 top-1 rounded-full bg-white/5 p-1  hover:bg-white/10"
								onClick={() => setIsallTodosCompleted(false)}
							>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="fill-slate-300"
								>
									<path d="M17.6585 4.92888C18.049 4.53836 18.6822 4.53835 19.0727 4.92888C19.4632 5.3194 19.4632 5.95257 19.0727 6.34309L13.4158 12L19.0727 17.6568C19.4632 18.0473 19.4632 18.6805 19.0727 19.071C18.6822 19.4615 18.049 19.4615 17.6585 19.071L12.0016 13.4142L6.34481 19.071C6.3387 19.0771 6.33254 19.0831 6.32632 19.089C5.93455 19.4614 5.31501 19.4554 4.93059 19.071C4.6377 18.7781 4.56447 18.3487 4.71092 17.9876C4.75973 17.8672 4.83296 17.7544 4.93059 17.6568L10.5874 12L4.93059 6.34314C4.54006 5.95262 4.54006 5.31945 4.93059 4.92893C5.32111 4.5384 5.95428 4.5384 6.3448 4.92893L12.0016 10.5857L17.6585 4.92888Z" />
								</svg>
							</button>
						</div>
					</div>
				)}

				<Modal>
					<TodoForm />
				</Modal>
			</section>
		</>
	)
}
