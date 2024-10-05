import { useGlobalContext } from '../context'
import { IoMoon, IoSunnyOutline } from 'react-icons/io5'

const ThemeToggle = () => {
	const { isDarkTheme, toggleDarkTheme } = useGlobalContext()

	return (
		<section className='toggle-container'>
			<button className='theme-btn' onClick={toggleDarkTheme} type='button'>
				{isDarkTheme ? (
					<IoSunnyOutline className='theme-icon' />
				) : (
					<IoMoon className='theme-icon' />
				)}
			</button>
		</section>
	)
}

export default ThemeToggle
