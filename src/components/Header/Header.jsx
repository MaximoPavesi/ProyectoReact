import React from "react";
import NavBar from "../Header/NavBar"
import {Link} from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "../styles/header.css";

export const Header = () => {
    return (
        <header>
            <div className="brand">
                <div className="logo">
                    <button>
                        <Link to={'/'}>
                            <img src={'/img/logo.png'}  alt="logo de la empresa" />
                        </Link>
                    </button>
                </div>
                <h1>Foot Goal </h1>
            </div>
            <CartWidget cantidad={2} />
            <NavBar/>
        </header>
    )
}
