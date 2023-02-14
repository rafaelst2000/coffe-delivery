import americano from '../assets/coffees/Americano.png'
import arabe from '../assets/coffees/Arabe.png'
import expressoGelado from '../assets/coffees/CafeGelado.png'
import cafeLeite from '../assets/coffees/cafeLeite.png'
import capuccino from '../assets/coffees/Capuccino.png'
import chocolateQuente from '../assets/coffees/chocolateQuente.png'
import cubano from '../assets/coffees/Cubano.png'
import expressoCremoso from '../assets/coffees/ExpressoCremoso.png'
import havaiano from '../assets/coffees/Havaiano.png'
import irlandes from '../assets/coffees/Irlandes.png'
import latte from '../assets/coffees/Latte.png'
import macchiato from '../assets/coffees/Macchiato.png'
import mocaccino from '../assets/coffees/Mocaccino.png'
import expressoAmericano from '../assets/coffees/ExpressoAmericano.png'

import { Coffee } from '../pages/Home/components/CoffeeCard'


export const coffess: Coffee[] = [
  {
    id: 1,
    name: "Expresso Tradicional",
    price: 4.5,
    description: "O tradicional café feito com água quente e grãos moídos",
    tags: ["expresso", "tradicional"],
    img: americano
  },
  {
    id: 2,
    name: "Expresso Americano",
    price: 5.0,
    description: "Expresso diluído, menos intenso que o tradicional",
    tags: ["expresso", "americano"],
    img: expressoAmericano
  },
  {
    id: 3,
    name: "Expresso Cremoso",
    price: 5.5,
    description: "Café expresso tradicional com espuma cremosa",
    tags: ["expresso", "cremoso"],
    img: expressoCremoso
  },
  {
    id: 4,
    name: "Expresso Gelado",
    price: 6.0,
    description: "Bebida preparada com café expresso e cubos de gelo",
    tags: ["expresso", "gelado"],
    img: expressoGelado
  },
  {
    id: 5,
    name: "Café com Leite",
    price: 4.0,
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    tags: ["café", "leite"],
    img: cafeLeite
  },
  {
    id: 6,
    name: "Latte",
    price: 6.0,
    description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    tags: ["latte", "cremoso"],
    img: latte
  },
  {
    id: 7,
    name: "Capuccino",
    price: 6.5,
    description: "Bebida com canela feita de doses iguais de café, leite e espuma",
    tags: ["capuccino", "cremoso"],
    img: capuccino
  },
  {
    id: 8,
    name: "Macchiato",
    price: 6.0,
    description: "Café expresso misturado com um pouco de leite quente e espuma",
    tags: ["macchiato", "cremoso"],
    img: macchiato
  },
  {
    id: 9,
    name: "Mocaccino",
    price: 6.5,
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    tags: ["mocaccino", "cremoso", "chocolate"],
    img: mocaccino
  },
  {
    id: 10,
    name: "Chocolate Quente",
    price: 4.5,
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    tags: ["chocolate", "quente"],
    img: chocolateQuente
  },
  {
    id: 11,
    name: "Cubano",
    price: 4.5,
    description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    tags: ["especial", "alcoólico", "gelado"],
    img: cubano
  },
  {
    id: 12,
    name: "Havaiano",
    price: 5.5,
    description: "Bebida adocicada preparada com café e leite de coco",
    tags: ["especial"],
    img: havaiano
  },
  {
    id: 13,
    name: "Árabe",
    price: 4.5,
    description: "Bebida preparada com grãos de café árabe e especiarias",
    tags: ["especial"],
    img: arabe
  },
  {
    id: 14,
    name: "Irlandês",
    price: 4.5,
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    tags: ["especial", "alcoólico"],
    img: irlandes
  },
]