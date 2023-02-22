import { ReactNode } from 'react'
import { CartContextProvider } from './CartContext'
import { ThemeContextProvider } from './ThemeContext'

interface AppProviderProps {
  children: ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <ThemeContextProvider>
      <CartContextProvider>
          {children}
      </CartContextProvider>
    </ThemeContextProvider>
  )
}