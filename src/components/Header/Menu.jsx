import React, {useState} from "react";
import {Dropdown, DropdownItem, DropdownMenu, DropdownToogle} from "reactstrap";
import {Link} from "react-router-dom"

export const Menu = () => {
    const [dropdownCamisetas, setDropdownCamisetas] = useState(false)

    const desplegarCamisetas = () =>{
        setDropdownCamisetas(!dropdownCamisetas)
    }
    const [dropdownBotines, setDropdownBotines] = useState(false)
    
    const desplegarBotines = () => {
        setDropdownBotines(!dropdownBotines)
    } 

    return (
        <ul className="menu">
            <li>
                <Dropdown isOpen={dropdownCamisetas} toogle={desplegarCamisetas}>
                    <DropdownToogle caret>
                        Camisetas
                    </DropdownToogle>
                    <DropdownMenu>
                        <DropdownItem>
                            <Link to={productos/botines/nike}>Nike</Link>
                        </DropdownItem>
                        <DropdownItem>
                            <Link to={productos/botines/adidas}>Adidas</Link>
                        </DropdownItem>
                        <DropdownItem>
                            <Link to={productos/camisetas}>Ver todos</Link>
                        </DropdownItem>
                        <DropdownItem>
                            <Link to={productos/pelotas}>Pelotas</Link>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </li>
        </ul>
    )
}