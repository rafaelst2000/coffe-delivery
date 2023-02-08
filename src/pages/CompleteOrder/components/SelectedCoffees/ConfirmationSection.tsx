import { Button } from "../../../../components/Button";
import { ConfirmationSectionContainer } from "./styles";

export function ConfirmationSection() {
  return (
    <ConfirmationSectionContainer>
      <div>
        <p>Total de itens</p>
        <p>R$ 9,90</p>
      </div>
      <div>
        <p>Entrega</p>
        <p>R$ 3,50</p>
      </div>
      <div className="total">
        <p>Total</p>
        <p>R$ 29,90</p>
      </div>

      <Button text="Confirmar pedido"/>
    </ConfirmationSectionContainer>
  )
}