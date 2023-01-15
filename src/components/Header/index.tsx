import { HeaderContainer, Location,Cart } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <nav>
        <Location to="/">
          <MapPin size={24} />
          Porto Alegre, RS
        </Location>
        <Cart to="cart" title="Carrinho">
          <ShoppingCart size={24} />
        </Cart>
      </nav>
    </HeaderContainer>
  )
}
