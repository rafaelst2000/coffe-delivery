import { createContext, ReactNode, useEffect, useState } from 'react'
import { Coffee } from '../pages/Home/components/CoffeeCard'
import { produce } from 'immer'

export interface CartItem extends Coffee {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  cartQuantity: number
  cartItemsTotalPrice: number
  addCoffeeToCart: (coffee: CartItem) => void
  changeCartItemQuantity: (cartItemId: number, type: 'increase' | 'decrease') => void
  removeCartItem: (cartItemId: number) => void
  clearCart: () => void
}

const COFFEE_ITEMS_STORAGE_KEY = 'coffee-delivery-cart'

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY)
    if(storedCartItems) {
      return JSON.parse(storedCartItems)
    }
    return []
  })
  const cartQuantity = cartItems.length
  const cartItemsTotalPrice = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity
  }, 0)

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlredyExistInCart = cartItems.findIndex(cartItem => cartItem.id === coffee.id)

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlredyExistInCart < 0) draft.push(coffee)
      else draft[coffeeAlredyExistInCart].quantity += coffee.quantity
    })

    setCartItems(newCart)
  }

  function changeCartItemQuantity(cartItemId: number, type: 'increase' | 'decrease') {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistInCart = cartItems.findIndex(cartItem => cartItem.id === cartItemId)

      if(coffeeExistInCart >= 0) {
        const item = draft[coffeeExistInCart]
        draft[coffeeExistInCart].quantity = type === 'increase' ? item.quantity + 1 : item.quantity - 1
      }
    })
    setCartItems(newCart)
  }

  function removeCartItem(cartItemId: number) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistInCart = cartItems.findIndex(cartItem => cartItem.id === cartItemId)

      if(coffeeExistInCart >= 0) {
        draft.splice(coffeeExistInCart, 1)
      }
    })
    setCartItems(newCart)
  }

  function clearCart() {
    setCartItems([])
  }

  useEffect(() => {
    localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <CartContext.Provider value={{ cartItems, cartQuantity, addCoffeeToCart, changeCartItemQuantity, removeCartItem, cartItemsTotalPrice, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}
