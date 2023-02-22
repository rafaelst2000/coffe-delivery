import { AppProvider } from './context'
import { LayoutApp } from './Layout'

export function App() {
  return (
    <AppProvider>
      <LayoutApp />
    </AppProvider>
  )
}

export default App
