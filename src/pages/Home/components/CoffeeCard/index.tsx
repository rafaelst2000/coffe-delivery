import { CoffeCardContainer,CardActions, CardPrice, Cart } from './styles'
import { QuantityInput } from '../QuantityInput'
import { ShoppingCart } from 'phosphor-react'
export interface CoffeeCardProps {
  id: number
  description: string
  img: string
  name: string
  price: number
  tags: string[]
}

export function CoffeCard({ description, img, name, price, tags }: CoffeeCardProps) {
  return (
    <CoffeCardContainer>
      <img src={img} alt="" />

      <ul>
        {tags.map(t => <li key={t}>{t}</li>)}
      </ul>

      <h3>{name}</h3>
      <p>{description}</p>

      <CardActions>
        <CardPrice>
          R$ <span>{price}</span>
        </CardPrice>
        <div className="action-item-side">
          <QuantityInput />
          <Cart>
            <ShoppingCart size={22} />
          </Cart>
        </div>
      </CardActions>
    </CoffeCardContainer>
  )
}