import { useGlobalContext } from '../context'

const ThemeToggle = () => {
	const { isDarkTheme, toggleDarkTheme } = useGlobalContext()
	return (
		<div>
			<button onClick={toggleDarkTheme} type='button'>
				123
			</button>
		</div>
	)
}

export default ThemeToggle
