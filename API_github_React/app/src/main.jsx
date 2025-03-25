import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="bg-blue-500 text-white p-4 text-center">
      Tailwind está funcionando?
    </div>
    <App />
  </StrictMode>,
)
