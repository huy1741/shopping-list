import React from 'react'
import { ProductDetailsItemTop } from './ProductDetailsItemTop'
import { Data } from '../../type'
interface Props{
  data: Data[];
  deleteProduct(id: number): void;
  editProduct(name: string, number: number, id: number): void;  
}
export const ProductDetailsTop : React.FC<Props> = ({ data, deleteProduct, editProduct} ) => {
  return <div className='header-list-top'>
            <h2 className='header-column '>Product Details</h2>
            {data.map((item, index) => <ProductDetailsItemTop key={item.id} name={item.name} id={item.id} amount={item.amount} deleteProduct={deleteProduct} editProduct={editProduct}/> )}
          </div>
}
