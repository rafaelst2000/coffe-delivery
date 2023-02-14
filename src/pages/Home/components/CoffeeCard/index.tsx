import { CoffeCardContainer,CardActions, CardPrice, Cart } from './styles'
import { QuantityInput } from '../QuantityInput'
import { ShoppingCart } from 'phosphor-react'
import { formatMoney } from '../../../../helpers/formatMoney'
import { useCart } from '../../../../hooks/useCart'
import { useState } from 'react'
export interface Coffee {
  id: number
  description: string
  img: string
  name: string
  price: number
  tags: string[]
}

interface CoffeeProps {
  coffee: Coffee
}

export function CoffeCard({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = useState(1)
  const { addCoffeeToCart } = useCart()

  const formattedPrice = formatMoney(coffee.price)

  function handleIncrease() {
    if(quantity > 8) return
    setQuantity(state => state + 1)
  }

  function handleDecrease() {
    if(quantity < 1) return 
    setQuantity(state => state - 1)
  }

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity
    }

    addCoffeeToCart(coffeeToAdd)
  }

  return (
    <CoffeCardContainer>
      <img src={coffee.img} alt="" />

      <ul>
        {coffee.tags.map(t => <li key={t}>{t}</li>)}
      </ul>

      <h3>{coffee.name}</h3>
      <p>{coffee.description}</p>

      <CardActions>
        <CardPrice>
          R$ <span>{formattedPrice}</span>
        </CardPrice>
        <div className="action-item-side">
          <QuantityInput
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <Cart onClick={handleAddToCart}>
            <ShoppingCart size={22} />
          </Cart>
        </div>
      </CardActions>
    </CoffeCardContainer>
  )
}