import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { AppContext } from './context.tsx'
import './index.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<AppContext>
			<QueryClientProvider client={queryClient}>
				<App />
			</QueryClientProvider>
		</AppContext>
	</StrictMode>
)
