import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import { convertStringToNum } from '../../utils'
interface Props{
  name: string;
  id: number;
  amount: number;
  deleteProduct(id: number): void;
  editProduct(name: string, number: number, id: number): void;  
}
export const ProductDetailsItemTop : React.FC<Props> = ({ name, id, amount, deleteProduct, editProduct }) => {
  const [itemName, changeName] = useState<string>(name)
  const [itemNumb, changeNumb] = useState<number>(amount)
  const errorTextName = itemName === '' ? 'Please enter product\'s name' : ''
  const errorTextAmount = itemNumb === 0 || isNaN(itemNumb) === true ? 'Amount must be larger than 0' : ''
  const handleEnterPress = (ev: any) => {
    if (itemName === '' || itemNumb === 0 || isNaN(itemNumb) === true) return
    else {
      if (ev.key === 'Enter') {
        editProduct(itemName, itemNumb, id)
      }
    }
  }
  return <Stack
    direction="row"
    spacing={4}
    className='itemCard'
  >
        <TextField id="outlined-basic" variant="outlined" value={itemName} type='text' onKeyPress={handleEnterPress} onChange={e => changeName(e.target.value)} error={itemName === ''} helperText={errorTextName}/>
        <TextField id="outlined-basic" variant="outlined" value={itemNumb.toString()} type='number' onKeyPress={handleEnterPress} onChange={e => changeNumb(convertStringToNum(e.target.value))} error={itemNumb === 0 || isNaN(itemNumb) === true } helperText={errorTextAmount} inputProps={{ min: 0 }}/>
        <IconButton color='primary' aria-label="delete" onClick={() => deleteProduct(id)}>
          <DeleteIcon />
        </IconButton>
       </Stack>
}
