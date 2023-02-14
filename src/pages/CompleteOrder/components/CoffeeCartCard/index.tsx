import { QuantityInput } from "../../../Home/components/QuantityInput";
import { CoffeeCartCardContainer, ActionsContainer, RemoveButton } from "./styles";
import { Trash } from 'phosphor-react'
import { CartItem } from "../../../../context/CartContext";
import { formatMoney } from "../../../../helpers/formatMoney";
import { useCart } from "../../../../hooks/useCart";

interface CoffeeCartCardProps {
  coffee: CartItem
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart()

  const coffeeTotal = coffee.price * coffee.quantity
  const formattedPrice = formatMoney(coffeeTotal)

  function handleIncrease() {
    if(coffee.quantity > 8) return 
    changeCartItemQuantity(coffee.id, 'increase')
  }

  function handleDecrease() {
    if(coffee.quantity < 2) return 
    changeCartItemQuantity(coffee.id, 'decrease')
  }

  function handleRemove() {
    removeCartItem(coffee.id)
  }

  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={coffee.img} />
        <div>
          <h3>{coffee.name}</h3>
          <ActionsContainer>
            <QuantityInput quantity={coffee.quantity} onIncrease={handleIncrease} onDecrease={handleDecrease} />
            <RemoveButton onClick={handleRemove}>
              <Trash size={16} />
              Remover
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ {formattedPrice}</p>
    </CoffeeCartCardContainer>
  )
}