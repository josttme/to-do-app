import { TodoTitle } from '../components/TodoTitle'
import { TodoCounter } from '../components/TodoCounter'
import { TodoSearch } from '../components/TodoSearch'
import { TodoList } from '../components/TodoList'
import { TodoItem } from '../components/TodoItem'
import { TodoButtonCreate } from '../components/TodoButtonCreate'
import Modal from '../components/Modal/Modal'
import TodoForm from '../components/Modal/TodoForm'

const defaultTodos = [
	{ text: 'Terminar el Curso de JavaScript Desde Cero', completed: true },
	{ text: 'Terminar el Curso de ReactJS', completed: false },
	{
		text: 'Terminar el Curso de React.js con Vite.js y TailwindCSS',
		completed: false
	},
	{
		text: 'Terminar el Curso Prueba Técnica: E-commerce Profesional con React.js',
		completed: false
	},
	{
		text: 'Terminar el Curso de Introducción al Desarrollo Backend',
		completed: false
	},
	{
		text: 'Terminar el Curso de Fundamentos de Node.js',
		completed: false
	},
	{
		text: 'Terminar la ruta de Full Stack Developer con JavaScript',
		completed: false
	}
]

export function App() {
	const openModal = false
	return (
		<section className="text-center text-white">
			<div className=" mx-auto mb-10 grid h-14  w-11/12 max-w-lg place-items-center lg:relative">
				<TodoTitle />
				<TodoButtonCreate />
			</div>

			<TodoSearch />
			<TodoCounter completed={1} total={7} />

			<TodoList>
				{defaultTodos.map(({ text, completed }) => (
					<TodoItem key={text} text={text} completed={completed} />
				))}
			</TodoList>
			{openModal && (
				<Modal>
					<TodoForm />
				</Modal>
			)}
		</section>
	)
}
