import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { useDarkTheme } from './hooks/useDarkTheme'

import { Router } from './Router'
import { GlobalStyle } from './styles/global'

import { defaultTheme } from './styles/themes/default'
import { darkTheme } from './styles/themes/dark'

export function LayoutApp() {
  const { isDarkTheme } = useDarkTheme()
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : defaultTheme}>
      <BrowserRouter>
        <GlobalStyle />

        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}