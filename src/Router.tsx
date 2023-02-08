import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'

import { Home } from './pages/Home'
import { CompleteOrder } from './pages/CompleteOrder'
import { OrderConfirmed } from './pages/OrderConfirmed'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CompleteOrder />} />
        <Route path="/confirm" element={<OrderConfirmed />} />
      </Route>
    </Routes>
  )
}
