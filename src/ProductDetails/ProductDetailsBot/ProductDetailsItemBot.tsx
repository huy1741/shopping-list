import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { convertStringToNum } from '../../utils'
interface Props{
  addProduct(name:string, amount: number, id: number): void; 
}
export const ProductDetailsItemBot : React.FC<Props>  = ({addProduct}) => {
  const [itemName, changeName] = useState<string>('')
  const [itemNumb, changeNumb] = useState<number>(0)

  const addProductSequence = () => {
    addProduct(itemName, itemNumb, Math.random())
    changeName('')
    changeNumb(0)
  }
  const handleSubmit = () => {
    if (itemName === '' || itemNumb === 0 || isNaN(itemNumb) === true) return
    else (addProductSequence())
  }
  const errorTextName = itemName === '' ? 'Please enter product\'s name' : ''
  const errorTextAmount = itemNumb === 0 || isNaN(itemNumb) === true ? 'Amount must be larger than 0' : ''
  const handleEnterPress = (ev: any) => {
    if (ev.key === 'Enter') {
      if (itemName === '' || itemNumb === 0 || isNaN(itemNumb) === true) return
      else (addProductSequence())
      ev.preventDefault()
    }
  }
  return <Stack
    direction="row"
    justifyContent="space-evenly"
    alignItems="stretch"
    spacing={4}
    className='itemCard'
  >
      <TextField id="outlined-basic" variant="outlined" value={itemName} type='text' onChange={e => changeName(e.target.value)} error ={itemName === ''} helperText={errorTextName} onKeyPress={handleEnterPress}/>
      <TextField id="outlined-basic" variant="outlined" value={itemNumb.toString()} type='number' onKeyPress={handleEnterPress} onChange={e => changeNumb(convertStringToNum(e.target.value))} error={itemNumb === 0 || isNaN(itemNumb) === true } helperText={errorTextAmount} inputProps={{ min: 0 }}/>
      <IconButton color='primary' aria-label="add to shopping cart" onClick={handleSubmit}>
          <AddShoppingCartIcon />
      </IconButton>
      </Stack>
}
