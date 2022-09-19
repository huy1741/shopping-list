import { ADD_PRODUCT, EDIT_PRODUCT, DELETE_PRODUCT, ADD_LIST } from './actionTypes'
import { Data } from '../type'

export const addProduct = (name: string, amount: number, id: number) => ({
  type: ADD_PRODUCT,
  payload: {
    name, amount, id
  }
})

export const deleteProduct = (id: number) => ({
  type: DELETE_PRODUCT,
  payload: { id }
})

export const editProduct = (name: string, amount: number, id: number) => ({
  type: EDIT_PRODUCT,
  payload: { name, amount, id }
})

export const addList = (list: Data[]) => ({
  type: ADD_LIST,
  payload: list
})
