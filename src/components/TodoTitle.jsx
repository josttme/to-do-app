import { useRef, useEffect } from 'react'

export function TodoTitle() {
	const textRef = useRef()
	useEffect(() => {
		textRef.current.setAttribute(
			'style',
			'-webkit-background-clip: text; -webkit-text-fill-color: transparent;'
		)
	}, [])
	return (
		<h1
			ref={textRef}
			className="inline-block bg-gradient-to-r from-[#05a4ff] to-[#bb29fa]  text-center text-4xl font-bold"
		>
			ToDo App
		</h1>
	)
}
