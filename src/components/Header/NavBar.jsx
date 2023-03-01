import React from 'react'
import '../styles/NavBar.css';
import {CartWigdet} from "../CartWidget/CartWidget"
import {Menu} from "../Header/Menu"


const Navbar = () => {
  return (
    <>
         
         <a href="https://front.codes/" class="logo" target="_blank">
            <img src="/img/soccer-world-cup.png" alt="" />
	     </a>
       

  	    <input class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon"/>
  	    <label for="menu-icon"></label>
  	    <nav class="nav"> 		
  		    <ul class="pt-5">
  			    <li><a href="#">Inico</a></li>
  			    <li><a href="#">Marcas</a></li>
  			    <li><a href="#">Sobre Nosotros</a></li>
  			    <li><a href="#">Contacto</a></li>
  		    </ul>
			<Menu />
			<CarWigdet cantidad={2} />
  	    </nav>
    </>
  )
}

export default NavBar