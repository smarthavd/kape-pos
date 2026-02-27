import { useState } from "react"
import { Product } from "./types"

const products: Product[] = [
  { id: 1, name: "Espresso", price: 120 },
  { id: 2, name: "Latte", price: 150 },
  { id: 3, name: "Cappuccino", price: 140 },
  { id: 4, name: "Iced Coffee", price: 160 }
]

export default function App() {
  const [cart, setCart] = useState<Product[]>([])

  const addToCart = (product: Product) => {
    setCart([...cart, product])
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="container">
      <h1>KapePOS ?</h1>

      <div className="products">
        {products.map(product => (
          <button key={product.id} onClick={() => addToCart(product)}>
            {product.name} - ?{product.price}
          </button>
        ))}
      </div>

      <div className="cart">
        <h2>Cart</h2>
        {cart.map((item, index) => (
          <p key={index}>{item.name} - ?{item.price}</p>
        ))}
        <h3>Total: ?{total}</h3>
      </div>
    </div>
  )
}