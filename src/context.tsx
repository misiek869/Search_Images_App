import {
	createContext,
	useContext,
	useState,
	ReactNode,
	useEffect,
} from 'react'

interface GlobalContextType {
	isDarkTheme: boolean
	setIsDarkTheme: (value: boolean) => void
	toggleDarkTheme: () => void
	search: string
	setSearch: (value: string) => void
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined)

export const useGlobalContext = (): GlobalContextType => {
	const context = useContext(GlobalContext)
	if (!context) {
		throw new Error('useGlobalContext must be used within an AppContext')
	}
	return context
}

interface AppContextProps {
	children: ReactNode // Typ dla children
}

export const AppContext = ({ children }: AppContextProps) => {
	const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false)
	const [search, setSearch] = useState<string>('dog')

	const toggleDarkTheme = (): void => {
		setIsDarkTheme(!isDarkTheme)
	}

	useEffect(() => {
		document.body.classList.toggle('dark-theme', isDarkTheme)
	}, [isDarkTheme])

	return (
		<GlobalContext.Provider
			value={{
				isDarkTheme,
				setIsDarkTheme,
				toggleDarkTheme,
				search,
				setSearch,
			}}>
			{children}
		</GlobalContext.Provider>
	)
}
