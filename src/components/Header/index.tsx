import { Location, Cart, HeaderContent } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import logo from '../../assets/logo.svg'
import { useCart } from '../../hooks/useCart'

export function Header() {
  const { cartQuantity } = useCart()

  return (
    <HeaderContent>
      <div>
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>
        <nav>
          <Location to="/">
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
