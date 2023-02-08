import { OrderConfirmedContainer, OrderDetailsContainer } from "./styles";

import imgCofirmedOrder from '../../assets/Illustration.svg'

export function OrderConfirmed() {
  return (
    <OrderConfirmedContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você.</p>
      </div>

      <section>
        <OrderDetailsContainer>
          <p>Oi</p>
        </OrderDetailsContainer>
        <img src={imgCofirmedOrder} />
      </section>
    </OrderConfirmedContainer>
  )
}