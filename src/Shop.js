import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from './state/index'

const Shop = () => {

  const dispatch = useDispatch()
  const {withrawMoney, depositeMoney} = bindActionCreators(actionCreators, dispatch);
  return (
    <div>
        <h2>Deposite / Withraw Money</h2>
        <button className="btn btn-primary mx-2" onClick={()=>withrawMoney(100)} >-</button>
       Update Balance <button className="btn btn-primary mx-2" onClick={()=>depositeMoney(100)}>+</button>
    </div>
  )
}

export default Shop
