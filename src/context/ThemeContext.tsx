import { createContext, ReactNode, useEffect, useState } from 'react'

interface ThemeContextType {
  isDarkTheme: boolean
  toggleTheme: () => void
}

const COFFEE_DELIVERY_THEME_STORAGE_KEY = 'coffee-delivery-theme'

export const ThemeContext = createContext({} as ThemeContextType)

interface ThemeProviderProps {
  children: ReactNode
}

export function ThemeContextProvider({ children }: ThemeProviderProps) {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const storedTheme = localStorage.getItem(COFFEE_DELIVERY_THEME_STORAGE_KEY)
    if(storedTheme === 'true') return Boolean(storedTheme)
    return false
  })

  function toggleTheme() {
    setIsDarkTheme(!isDarkTheme)
  }

  useEffect(() => {
    localStorage.setItem(COFFEE_DELIVERY_THEME_STORAGE_KEY, JSON.stringify(isDarkTheme))
  }, [isDarkTheme])

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
