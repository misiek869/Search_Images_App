import { useGlobalContext } from '../context'
import { IoMoon, IoSunnyOutline } from 'react-icons/io5'

const ThemeToggle = () => {
	const { isDarkTheme, toggleDarkTheme } = useGlobalContext()

	return (
		<div>
			<button onClick={toggleDarkTheme} type='button'>
				{isDarkTheme ? <IoMoon /> : <IoSunnyOutline />}
			</button>
		</div>
	)
}

export default ThemeToggle
