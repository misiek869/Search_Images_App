import Gallery from './components/Gallery'
import SearchForm from './components/SearchForm'
import ThemeToggle from './components/ThemeToggle'
import Title from './components/Title'

function App() {
	return (
		<>
			<ThemeToggle />
			<Title />
			<SearchForm />
			<Gallery />
		</>
	)
}

export default App
