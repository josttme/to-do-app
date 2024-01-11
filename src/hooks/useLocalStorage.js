import { useState, useEffect } from 'react'

export const useLocalStorage = (key) => {
	// Obtiene el valor almacenado en el localStorage o devuelve un array vacío si no hay valor
	const [todos, setSaveTodos] = useState(() => {
		const item = localStorage.getItem(key)
		return item ? JSON.parse(item) : []
	})
	useEffect(() => {
		// Guarda el estado actual en el localStorage cuando cambia
		localStorage.setItem(key, JSON.stringify(todos))
	}, [key, todos])

	return [todos, setSaveTodos]
}
