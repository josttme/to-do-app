export function TodoButtonCreate() {
	return (
		<div className="group fixed bottom-5 right-5 z-50   h-14 w-14 lg:absolute lg:bottom-0 lg:right-0  lg:w-24 ">
			<button className="rounded-fullftransform grid h-14 w-14 place-content-center rounded-full border-2  border-[#b131e9] bg-[#0236c5] hover:cursor-pointer hover:bg-blue-700   focus:outline-none focus:ring focus:ring-[#b131e9] focus:ring-opacity-80  lg:w-24">
				<svg
					className=" h-10 w-10"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={2.5}
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M12 6v12m6-6H6"
					/>
				</svg>
			</button>
			<span className="text-ms text-md absolute -bottom-28  left-1/2  hidden h-12 w-36 -translate-x-1/2 -translate-y-full transform place-content-center rounded-lg bg-blue-600  text-center font-sans text-white after:absolute after:bottom-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-blue-600 after:border-t-transparent after:content-[''] lg:group-hover:grid ">
				Crea un ToDo (m)
			</span>
		</div>
	)
}
