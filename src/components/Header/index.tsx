import { Location, Cart, HeaderContent, ToggleTheme } from './styles'
import { MapPin, ShoppingCart, Sun, Moon } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import { useCart } from '../../hooks/useCart'
import { useDarkTheme } from '../../hooks/useDarkTheme'

export function Header() {
  const { cartQuantity } = useCart()
  const { isDarkTheme, toggleTheme } = useDarkTheme()

  function handleChangeTheme() {
    toggleTheme()
  }

  return (
    <HeaderContent>
      <div>
        <NavLink to="/">
          <img src={'Logo.svg'} alt="" />
        </NavLink>
        <nav>
          <ToggleTheme onClick={handleChangeTheme}>
            {isDarkTheme ? <Moon size={24} />  : <Sun size={24} /> }
          </ToggleTheme>
          <Location>
            <MapPin size={24} />
            São Jerônimo, RS
          </Location>
          <Cart to="/cart" title="Carrinho">
            {cartQuantity > 0 && <span>{cartQuantity}</span>}
            <ShoppingCart size={24} />
          </Cart>
        </nav>
      </div>
    </HeaderContent>
  )
}
