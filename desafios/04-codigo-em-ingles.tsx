// Código em inglês
import { useState } from 'react'

interface Product {
  title: string
  price: string
}

const productList = [
  {
    title: 'Macarrão',
    price: 'R$ 25,00'
  },
  {
    title: 'Hamburger',
    price: 'R$ 30,00'
  }
]

export function ListProduct() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])

  function searchProducts(searchTerm: string) {
    const productsFiltered = productList.filter((product) =>
      product.title.includes(searchTerm)
    )

    setFilteredProducts(productsFiltered)
  }

  return (
    <div>
      <input type="text" onChange={(e) => searchProducts(e.target.value)} />

      {filteredProducts.map((product) => (
        <div>
          <p>{product.title}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  )
}
