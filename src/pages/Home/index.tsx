import { HomeContainer, HomeIntro, HomeList, HomeCoffees, HomeCoffeesContainer } from "./styles"
import { HomeInfoListItem, ItemProps } from "./components/HomeInfoListItem"
import { CoffeCard } from "./components/CoffeeCard"
import { coffess } from '../../helpers/coffees'
import { useDarkTheme } from "../../hooks/useDarkTheme"

const items: ItemProps[] = [
  {
    id: 1,
    icon: 'shopping-cart',
    color: 'yellow-dark',
    description: 'Compra simples e segura'
  },
  {
    id: 2,
    icon: 'package',
    color: 'base-text',
    description: 'Embalagem mantém o café intacto'
  },
  {
    id: 3,
    icon: 'timer',
    color: 'yellow',
    description: 'Entrega rápida e rastreada'
  },
  {
    id: 4,
    icon: 'coffee',
    color: 'purple',
    description: 'O café chega fresquinho até você'
  }
]

export function Home() {
  const { isDarkTheme } = useDarkTheme()

  return (
    <>
      <HomeContainer isDarkTheme={isDarkTheme}>
        <HomeIntro>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

            <HomeList>
              {
                items.map((item) => {
                  return <HomeInfoListItem key={item.id} {...item}/>
                })
              }
            </HomeList>
          </div>
          <img src={'Imagem.png'} />
        </HomeIntro>
      </HomeContainer>
      <HomeCoffeesContainer>
        <h2>Nossos cafés</h2>
        <HomeCoffees>  
          {coffess.map(coffee => <CoffeCard key={coffee.id} coffee={coffee} />)}
        </HomeCoffees>
      </HomeCoffeesContainer>
    </>
  )
}