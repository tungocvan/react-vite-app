import React from 'react'
import Product from '../../components/Product'

function Canlendar() {
  const products = [
    { id: 1, name: 'PRODUCT NAME 1', image: '/assets/products/1.PNG', price: 120000 },
    { id: 2, name: 'PRODUCT NAME 2', image: '/assets/products/2.PNG', price: 120000 },
    { id: 3, name: 'PRODUCT NAME 3', image: '/assets/products/3.PNG', price: 220000 },
    { id: 4, name: 'PRODUCT NAME 4', image: '/assets/products/4.PNG', price: 123000 },
    { id: 5, name: 'PRODUCT NAME 5', image: '/assets/products/5.PNG', price: 320000 },
    { id: 6, name: 'PRODUCT NAME 6', image: '/assets/products/6.PNG', price: 120000 },
];

  return (
    <div>
      <Product products={products} />
    </div>
  )
}

export default Canlendar