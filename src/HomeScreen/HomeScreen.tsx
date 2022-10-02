import React, { useEffect } from 'react'
import { ProductDetailsTop } from '../ProductDetails/ProductDetailsTop/ProductDetailsTop'
import { ProductDetailsBot } from '../ProductDetails/ProductDetailsBot/ProductDetailsBot'
import logo from '../resource/logo.png'
import { generateList } from '../utils'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import { Data } from '../type'
interface Props{
  data: Data[];
  deleteProduct(id: number): void;
  addProduct(name: string, number: number, id: number): void;
  editProduct(name: string, number: number, id: number): void;
  addList(item: Data[]) : void;  
}
export const HomeScreen : React.FC<Props> = ({addList, data, addProduct, deleteProduct, editProduct}) => {
  useEffect(() => {
    // Generate a list of products
    addList(generateList())
  }, [addList])
  return <div className='container'>
          <div className='header-content'>
          <img src={logo} className="image" alt='main-logo'></img>
          <h1>Shopping List</h1>
        </div>
        <ProductDetailsTop data={data} deleteProduct={deleteProduct} editProduct={editProduct}/>
        <ProductDetailsBot addProduct={addProduct}/>
        {data.length < 1 &&
          <Box className="circulation">
           <CircularProgress />
           <h1>The list is being loaded or you can just add something.</h1>
          </Box>}
        </div>
}
