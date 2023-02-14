import { useCart } from "../../../../hooks/useCart";
import { CoffeeCartCard } from "../CoffeeCartCard";
import { ConfirmationSection } from "./ConfirmationSection";
import { DetailsContainer, SelectedCoffeesContainer } from "./styles";

export function SelectedCoffees() {
  const { cartItems } = useCart()

  return (
    <SelectedCoffeesContainer>
      <h1>Cafés selecionados</h1>

      <DetailsContainer>
        {cartItems.map(coffee => (
          <CoffeeCartCard key={coffee.id} coffee={coffee}/>
        ))}
      
        <ConfirmationSection />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}