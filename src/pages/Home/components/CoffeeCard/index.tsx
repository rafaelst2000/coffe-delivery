import { CoffeCardContainer,CardActions, CardPrice, Cart } from './styles'
import { QuantityInput } from '../QuantityInput'
import { ShoppingCart } from 'phosphor-react'
import { formatMoney } from '../../../../helpers/formatMoney'
export interface CoffeeCardProps {
  id: number
  description: string
  img: string
  name: string
  price: number
  tags: string[]
}

export function CoffeCard({ description, img, name, price, tags }: CoffeeCardProps) {
  const formattedPrice = formatMoney(price)

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
          R$ <span>{formattedPrice}</span>
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