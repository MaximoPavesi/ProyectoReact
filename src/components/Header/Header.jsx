import React from "react";
import NavBar from "../Header/NavBar"
import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <div className="brand">
                <div className="logo">
                    <button>
                        <Link to={'/'}>
                            <img src={'/img/logo.webp'}  alt="logo de la empresa" />
                        </Link>
                    </button>
                </div>
                <h1>Foot Goal </h1>
            </div>
            <NavBar/>
        </header>
    )
}
