import React from 'react'
import { ProductDetailsItemBot } from './ProductDetailsItemBot'
interface Props{
  addProduct(name:string, amount: number, id: number): void; 
}
export const ProductDetailsBot : React.FC<Props> = ({addProduct}) => {
  return <div className='header-list-bot'>
            <h2 className='header-column '>Add New Products</h2>
            <ProductDetailsItemBot addProduct={addProduct}/>
            </div>
}
