import { CoffeCardContainer } from './styles'
import coffee from '../../../../assets/coffees/Americano.png'

export function CoffeCard() {
  return (
    <CoffeCardContainer>
      <img src={coffee} alt="" />

      <ul>
        <li>TRADICIONAL</li>
        <li>TRADICIONAL</li>
      </ul>

      <h3>Café com leite</h3>
      <p>Meio a meio de expresso tradicional com leite vaporizado</p>
    </CoffeCardContainer>
  )
}