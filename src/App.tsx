import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { darkTheme } from './styles/themes/dark'
import { CartContextProvider } from './context/CartContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <CartContextProvider>
            <Router />
        </CartContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
