import { Dispatch } from 'react';
import { connect } from 'react-redux'
import { Action } from 'redux';
import { addList, addProduct, deleteProduct, editProduct } from '../Redux/actions'
import { HomeScreen } from './HomeScreen'
import { Data } from '../type'
interface StateProps {
  productReducer: {list: Data[]};
}
const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    // dispatching actions returned by action creators
    addList: (list: Data[]) => dispatch(addList(list)),
    addProduct: (name: string, amount: number, id: number) => dispatch(addProduct(name, amount, id)),
    editProduct: (name: string, amount: number, id: number) => dispatch(editProduct(name, amount, id)),
    deleteProduct: (id: number) => dispatch(deleteProduct(id))
  }
}
const mapStateToProps = (state: StateProps ) => {
  const arr = state.productReducer.list
  return {
    data: arr
  }
}

export const HomeScreenContainer = connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
