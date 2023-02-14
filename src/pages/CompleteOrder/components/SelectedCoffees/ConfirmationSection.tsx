import { Button } from "../../../../components/Button";
import { formatMoney } from "../../../../helpers/formatMoney";
import { useCart } from "../../../../hooks/useCart";
import { ConfirmationSectionContainer } from "./styles";

const DELIVERY_PRICE = 3.5

export function ConfirmationSection() {
  const { cartItemsTotalPrice, cartQuantity } = useCart()
  const cartTotal = DELIVERY_PRICE + cartItemsTotalPrice

  const formattedItemsTotal = formatMoney(cartItemsTotalPrice)
  const formattedCartTotal = formatMoney(cartTotal)
  const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE)


  return (
    <ConfirmationSectionContainer>
      <div>
        <p>Total de itens</p>
        <p>R$ {formattedItemsTotal}</p>
      </div>
      <div>
        <p>Entrega</p>
        <p>R$ {formattedDeliveryPrice}</p>
      </div>
      <div className="total">
        <p>Total</p>
        <p>R$ {formattedCartTotal}</p>
      </div>

      <Button disabled={cartQuantity < 0} text="Confirmar pedido"/>
    </ConfirmationSectionContainer>
  )
}