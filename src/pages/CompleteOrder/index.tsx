import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CompleteOrderContainer } from "./styles";

export function CompleteOrder() {
  return (
    <CompleteOrderContainer>
      <CompleteOrderForm />
      <SelectedCoffees />
    </CompleteOrderContainer>
  )
}