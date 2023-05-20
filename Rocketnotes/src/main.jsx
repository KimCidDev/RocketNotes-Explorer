import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

import { Details }  from './pages/Details'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode theme={theme}>
    <ThemeProvider>
    <Details />
    </ThemeProvider>
  </React.StrictMode>,
)
