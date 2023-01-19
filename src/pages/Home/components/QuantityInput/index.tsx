import { QuantityInputContainer } from './styles'
import { Plus, Minus } from 'phosphor-react'

export function QuantityInput() {
  return (
    <QuantityInputContainer>
      <Minus size={16} />
      <span>0</span>
      <Plus size={16} />
    </QuantityInputContainer>
  )
}