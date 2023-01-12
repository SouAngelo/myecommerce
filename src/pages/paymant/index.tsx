import React, { useContext } from 'react'
import { cartContext } from '../../contexts/cartContexts'

function Paymant() {

  const { cart } = useContext<any>(cartContext)

  console.log(cart)

  return (
    <div>
      <h1>Será desenvolvido em breve... </h1>
    </div>
  )
}

export default Paymant