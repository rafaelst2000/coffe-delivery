import { InfoListItem } from './styles'
import { ShoppingCart, Package, Timer, Coffee} from 'phosphor-react'

export interface ItemProps {
  id: number,
  icon: 'shopping-cart' | 'package' | 'timer' | 'coffee',
  color: 'yellow-dark' | 'base-text' | 'yellow' | 'purple',
  description: string
}

export function HomeInfoListItem({ color, icon, description }: ItemProps) { 
  return (
    <InfoListItem iconColor={color}>
      <div>
        { icon === 'shopping-cart' ? <ShoppingCart /> : null }
        { icon === 'package' ? <Package /> : null }
        { icon === 'timer' ? <Timer /> : null }
        { icon === 'coffee' ? <Coffee /> : null }
      </div>
      <span>{description}</span>
    </InfoListItem>
  )
}