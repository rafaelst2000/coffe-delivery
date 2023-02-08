import { QuantityInput } from "../../../Home/components/QuantityInput";
import { CoffeeCartCardContainer, ActionsContainer, RemoveButton } from "./styles";
import { Trash } from 'phosphor-react'

export function CoffeeCartCard() {
  return (
    <CoffeeCartCardContainer>
      <div>
        <img src="" alt="" />
        <div>
          <h3>Expresso tradicional</h3>
          <ActionsContainer>
            <QuantityInput />
            <RemoveButton>
              <Trash size={16} />
              Remover
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ 9,90</p>
    </CoffeeCartCardContainer>
  )
}