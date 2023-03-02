import React from 'react'
import '../styles/NavBar.css';
import CartWigdet from "../CartWidget/CartWidget"
import {Link} from "react-router-dom"



const NavBar = () => {
  return (
    <>
         
         <a href="https://front.codes/" class="logo" target="_blank">
            <img src="/img/soccer-world-cup.png" alt="" />
	     </a>
       

  	    <input class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon"/>
  	    <label for="menu-icon"></label>
  	    <nav class="nav"> 		
  		    <ul class="pt-5">
				<li>
					<Link to={"/Inicio"}>Inicio</Link>
				</li>
				<li>
					<Link to={"/productos/botines/nike"}>Nike</Link>
				</li>
				<li>
					<Link to={"/productos/botines/adidas"}>Adidas</Link>
				</li>
				<li>
					<Link to={"/productos/camisetas"}>Camisetas</Link>
				</li>
				<li>
					<Link to={"/productos/pelotas"}>Pelotas</Link>
				</li>

  		    </ul>
			<CartWigdet cantidad={2} />
  	    </nav>
    </>
  )
}

export default NavBar