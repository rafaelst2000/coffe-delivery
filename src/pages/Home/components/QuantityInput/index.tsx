import { QuantityInputContainer } from './styles'
import { Plus, Minus } from 'phosphor-react'

interface QuantityInputProps {
  onIncrease: () => void
  onDecrease: () => void
  quantity: number
}

export function QuantityInput({ onIncrease, onDecrease, quantity }: QuantityInputProps) {
  return (
    <QuantityInputContainer>
      <Minus size={16} onClick={onDecrease} />
      <span>{quantity}</span>
      <Plus size={16} onClick={onIncrease} />
    </QuantityInputContainer>
  )
}