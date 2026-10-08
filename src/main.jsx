import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1 className="text-7xl text-red-600 text-center">Hello world...</h1>
  </StrictMode>,
)
