import { createContext, useContext, useState, ReactNode } from 'react'

const GlobalContext = createContext()

export const useGlobalContext = () => {
	const context = useContext(GlobalContext)
	if (!context) {
		throw new Error('useGlobalContext must be used within an AppContext')
	}
	return context
}

export const AppContext = ({ children }) => {
	return <GlobalContext.Provider>{children}</GlobalContext.Provider>
}
