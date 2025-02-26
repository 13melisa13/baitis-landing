import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles/colors.scss'
import './styles/normalize.scss'
import './styles/fonts.scss'
import './styles/icons.scss'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
