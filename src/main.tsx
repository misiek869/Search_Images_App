import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { AppContext } from './context.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<AppContext>
			<App />
		</AppContext>
	</StrictMode>
)
