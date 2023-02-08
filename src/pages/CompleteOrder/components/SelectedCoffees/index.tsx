import { CoffeeCartCard } from "../CoffeeCartCard";
import { ConfirmationSection } from "./ConfirmationSection";
import { DetailsContainer, SelectedCoffeesContainer } from "./styles";

export function SelectedCoffees() {
  return (
    <SelectedCoffeesContainer>
      <h1>Cafés selecionados</h1>

      <DetailsContainer>
        <CoffeeCartCard />
        <CoffeeCartCard />

        <ConfirmationSection />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}