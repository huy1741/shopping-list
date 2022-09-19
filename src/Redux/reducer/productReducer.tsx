/* eslint-disable import/no-anonymous-default-export */
import { ADD_PRODUCT, EDIT_PRODUCT, DELETE_PRODUCT, ADD_LIST } from '../actionTypes'
import {Data} from '../../type'
const initialState : { list: Data[] } = {
  list: []
}

interface AddListAction {
  type: 'ADD_LIST',
  payload: Data[]
}

interface AddProdAction {
  type: 'ADD_PRODUCT',
  payload: {name: string, amount: number, id: number}
}

interface EditProdAction {
  type: 'EDIT_PRODUCT',
  payload: {name: string, amount: number, id: number}
}

interface DelProdAction {
  type: 'DELETE_PRODUCT',
  payload: {id: number}
}

type Action = AddListAction | AddProdAction | EditProdAction | DelProdAction
export default function (state = initialState, action : Action) {
  switch (action.type) {
    case ADD_LIST: {
      return {
        list: [...action.payload]
      }
    }
    case ADD_PRODUCT: {
      const { id, name, amount } = action.payload
      return {
        list: [...state.list, { name, amount, id }]
      }
    }
    case EDIT_PRODUCT: {
      const { id, name, amount } = action.payload
      return {
        list: [...state.list.map(item => item.id === id ? { name, amount, id } : item)]
      }
    }
    case DELETE_PRODUCT: {
      const { id } = action.payload
      return {
        list: [...state.list.filter(item => item.id !== id)]
      }
    }
    default:
      return state
  }
}
