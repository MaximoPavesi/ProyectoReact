import React from 'react'
import '../styles/CartWidget.css';


function CartWidget({cantidad}) {
  return (
    <div>
      <li className="nav-item cart-notification">
          <img src="img/carrito-de-compras.png" alt="Carrito de compras" className="cart-icon" />
      </li>
      <p>{cantidad}</p>
  </div>
  )
}

export default CartWidget